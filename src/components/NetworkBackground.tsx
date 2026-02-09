"use client";

/**
 * NetworkBackground Component
 * 
 * A subtle Three.js animated background featuring an abstract network/grid effect.
 * 
 * Architecture Decisions:
 * - Non-interactive: Camera moves autonomously, no mouse/touch handlers
 * - FPS Throttled: Limits rendering to save battery and CPU
 * - Respects prefers-reduced-motion: Completely disables animation for accessibility
 * - Lazy loading: Only renders on client-side to avoid SSR issues
 * 
 * Performance Considerations:
 * - Uses instanced rendering for particles
 * - Limits draw calls by batching geometry
 * - Throttled to 30 FPS max (configurable)
 * - Uses simple shader materials for performance
 */

import { useRef, useMemo, useEffect, useState } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import * as THREE from "three";

// Configuration
const CONFIG = {
    particleCount: 150,
    connectionDistance: 2.5,
    maxConnections: 3,
    particleSize: 0.04,
    boundarySize: 10,
    particleSpeed: 0.002,
    cameraRotationSpeed: 0.0001,
    targetFPS: 30,
    frameInterval: 1000 / 30, // ~33ms per frame
};

/**
 * Particle System
 * Creates a network of floating nodes that drift slowly
 */
function ParticleNetwork() {
    const pointsRef = useRef<THREE.Points>(null);
    const linesRef = useRef<THREE.LineSegments>(null);
    const lastFrameTime = useRef(0);

    // Generate particle positions and velocities
    const { positions, velocities } = useMemo(() => {
        const pos = new Float32Array(CONFIG.particleCount * 3);
        const vel = new Float32Array(CONFIG.particleCount * 3);

        for (let i = 0; i < CONFIG.particleCount; i++) {
            const i3 = i * 3;
            // Random position within boundary
            pos[i3] = (Math.random() - 0.5) * CONFIG.boundarySize;
            pos[i3 + 1] = (Math.random() - 0.5) * CONFIG.boundarySize;
            pos[i3 + 2] = (Math.random() - 0.5) * CONFIG.boundarySize;

            // Random velocity
            vel[i3] = (Math.random() - 0.5) * CONFIG.particleSpeed;
            vel[i3 + 1] = (Math.random() - 0.5) * CONFIG.particleSpeed;
            vel[i3 + 2] = (Math.random() - 0.5) * CONFIG.particleSpeed;
        }

        return { positions: pos, velocities: vel };
    }, []);

    // Create geometry for particles
    const particleGeometry = useMemo(() => {
        const geometry = new THREE.BufferGeometry();
        geometry.setAttribute("position", new THREE.BufferAttribute(positions, 3));
        return geometry;
    }, [positions]);

    // Create line geometry for connections
    const lineGeometry = useMemo(() => {
        const geometry = new THREE.BufferGeometry();
        // Pre-allocate for max possible connections
        const maxLines = CONFIG.particleCount * CONFIG.maxConnections;
        const linePositions = new Float32Array(maxLines * 6); // 2 points per line, 3 coords each
        geometry.setAttribute("position", new THREE.BufferAttribute(linePositions, 3));
        return geometry;
    }, []);

    // Materials
    const particleMaterial = useMemo(
        () =>
            new THREE.PointsMaterial({
                color: 0x4aa8d8, // Accent primary color
                size: CONFIG.particleSize,
                transparent: true,
                opacity: 0.6,
                sizeAttenuation: true,
            }),
        []
    );

    const lineMaterial = useMemo(
        () =>
            new THREE.LineBasicMaterial({
                color: 0x4aa8d8,
                transparent: true,
                opacity: 0.15,
            }),
        []
    );

    // Animation frame - throttled
    useFrame((state) => {
        const currentTime = state.clock.getElapsedTime() * 1000;

        // Throttle to target FPS
        if (currentTime - lastFrameTime.current < CONFIG.frameInterval) {
            return;
        }
        lastFrameTime.current = currentTime;

        if (!pointsRef.current || !linesRef.current) return;

        const positionAttribute = pointsRef.current.geometry.getAttribute("position") as THREE.BufferAttribute;
        const posArray = positionAttribute.array as Float32Array;

        // Update particle positions
        for (let i = 0; i < CONFIG.particleCount; i++) {
            const i3 = i * 3;

            // Apply velocity
            posArray[i3] += velocities[i3];
            posArray[i3 + 1] += velocities[i3 + 1];
            posArray[i3 + 2] += velocities[i3 + 2];

            // Boundary check - wrap around
            const halfBoundary = CONFIG.boundarySize / 2;
            for (let j = 0; j < 3; j++) {
                if (posArray[i3 + j] > halfBoundary) {
                    posArray[i3 + j] = -halfBoundary;
                } else if (posArray[i3 + j] < -halfBoundary) {
                    posArray[i3 + j] = halfBoundary;
                }
            }
        }

        positionAttribute.needsUpdate = true;

        // Update connections
        const linePositions = linesRef.current.geometry.getAttribute("position") as THREE.BufferAttribute;
        const lineArray = linePositions.array as Float32Array;
        let lineIndex = 0;

        // Find nearby particles and create connections
        for (let i = 0; i < CONFIG.particleCount; i++) {
            let connections = 0;
            const i3 = i * 3;

            for (let j = i + 1; j < CONFIG.particleCount && connections < CONFIG.maxConnections; j++) {
                const j3 = j * 3;

                // Calculate distance
                const dx = posArray[i3] - posArray[j3];
                const dy = posArray[i3 + 1] - posArray[j3 + 1];
                const dz = posArray[i3 + 2] - posArray[j3 + 2];
                const distance = Math.sqrt(dx * dx + dy * dy + dz * dz);

                if (distance < CONFIG.connectionDistance) {
                    // Add line
                    lineArray[lineIndex++] = posArray[i3];
                    lineArray[lineIndex++] = posArray[i3 + 1];
                    lineArray[lineIndex++] = posArray[i3 + 2];
                    lineArray[lineIndex++] = posArray[j3];
                    lineArray[lineIndex++] = posArray[j3 + 1];
                    lineArray[lineIndex++] = posArray[j3 + 2];
                    connections++;
                }
            }
        }

        // Clear remaining line positions
        for (let i = lineIndex; i < lineArray.length; i++) {
            lineArray[i] = 0;
        }

        linePositions.needsUpdate = true;
        linesRef.current.geometry.setDrawRange(0, lineIndex / 3);
    });

    return (
        <>
            <points ref={pointsRef} geometry={particleGeometry} material={particleMaterial} />
            <lineSegments ref={linesRef} geometry={lineGeometry} material={lineMaterial} />
        </>
    );
}

/**
 * Camera Controller
 * Slowly rotates the camera around the scene origin
 */
function CameraController() {
    const { camera } = useThree();
    const angle = useRef(0);

    useFrame(() => {
        angle.current += CONFIG.cameraRotationSpeed;
        camera.position.x = Math.sin(angle.current) * 8;
        camera.position.z = Math.cos(angle.current) * 8;
        camera.lookAt(0, 0, 0);
    });

    return null;
}

/**
 * Main Background Component
 */
export default function NetworkBackground() {
    const [shouldRender, setShouldRender] = useState(false);
    const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

    useEffect(() => {
        // Check for reduced motion preference
        const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
        setPrefersReducedMotion(mediaQuery.matches);

        const handleChange = (e: MediaQueryListEvent) => {
            setPrefersReducedMotion(e.matches);
        };

        mediaQuery.addEventListener("change", handleChange);
        setShouldRender(true);

        return () => {
            mediaQuery.removeEventListener("change", handleChange);
        };
    }, []);

    // Don't render on SSR or if user prefers reduced motion
    if (!shouldRender || prefersReducedMotion) {
        return (
            <div
                className="fixed inset-0 -z-10"
                style={{
                    background: `radial-gradient(ellipse at 50% 50%, 
            hsl(220 14% 12%) 0%, 
            hsl(220 14% 7%) 100%)`,
                }}
                aria-hidden="true"
            />
        );
    }

    return (
        <div className="fixed inset-0 -z-10" aria-hidden="true">
            <Canvas
                camera={{ position: [0, 0, 8], fov: 60 }}
                dpr={[1, 1.5]} // Limit pixel ratio for performance
                gl={{
                    antialias: false, // Disable for performance
                    alpha: true,
                    powerPreference: "low-power",
                }}
                style={{ background: "hsl(220 14% 7%)" }}
            >
                <color attach="background" args={["hsl(220, 14%, 7%)"]} />
                <fog attach="fog" args={["hsl(220, 14%, 7%)", 5, 15]} />
                <CameraController />
                <ParticleNetwork />
            </Canvas>
        </div>
    );
}
