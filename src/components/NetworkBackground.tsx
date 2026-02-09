"use client";

/**
 * NetworkBackground Component
 * 
 * An interactive Three.js animated background featuring:
 * - Floating connection nodes
 * - Mouse interaction (repulsion + connections)
 * - Smooth camera movement
 * - Performance optimized
 */

import { useRef, useMemo, useEffect } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import * as THREE from "three";

// Configuration
const CONFIG = {
    particleCount: 100,
    connectionDistance: 2.2,
    mouseDistance: 3.5,
    particleSize: 0.05,
    boundarySize: 14,
    particleSpeed: 0.005,
    mouseRepulsion: 0.1,
    frameInterval: 1000 / 60,
};

function InteractiveNetwork() {
    const pointsRef = useRef<THREE.Points>(null);
    const linesRef = useRef<THREE.LineSegments>(null);

    // Global mouse tracker (normalized -1 to 1)
    const mouseValues = useRef({ x: 9999, y: 9999 });

    useEffect(() => {
        const handleMouseMove = (event: MouseEvent) => {
            // Normalize mouse coordinates to -1 to +1 (NDC)
            mouseValues.current.x = (event.clientX / window.innerWidth) * 2 - 1;
            mouseValues.current.y = -(event.clientY / window.innerHeight) * 2 + 1;
        };

        // Add to window so we track mouse even when over other elements
        if (typeof window !== 'undefined') {
            window.addEventListener("mousemove", handleMouseMove);
        }
        return () => {
            if (typeof window !== 'undefined') {
                window.removeEventListener("mousemove", handleMouseMove);
            }
        };
    }, []);

    const { viewport } = useThree();

    // Generate initial particle state
    const { positions, velocities } = useMemo(() => {
        const pos = new Float32Array(CONFIG.particleCount * 3);
        const vel = new Float32Array(CONFIG.particleCount * 3);

        for (let i = 0; i < CONFIG.particleCount; i++) {
            const i3 = i * 3;
            // Spread particles
            pos[i3] = (Math.random() - 0.5) * CONFIG.boundarySize;
            pos[i3 + 1] = (Math.random() - 0.5) * CONFIG.boundarySize;
            pos[i3 + 2] = (Math.random() - 0.5) * CONFIG.boundarySize;

            // Random delicate velocity
            vel[i3] = (Math.random() - 0.5) * CONFIG.particleSpeed;
            vel[i3 + 1] = (Math.random() - 0.5) * CONFIG.particleSpeed;
            vel[i3 + 2] = (Math.random() - 0.5) * CONFIG.particleSpeed;
        }

        return { positions: pos, velocities: vel };
    }, []);

    const geometry = useMemo(() => {
        const geo = new THREE.BufferGeometry();
        geo.setAttribute("position", new THREE.BufferAttribute(positions, 3));
        return geo;
    }, [positions]);

    const lineGeometry = useMemo(() => {
        const geo = new THREE.BufferGeometry();
        const maxLines = CONFIG.particleCount * CONFIG.particleCount;
        const linePos = new Float32Array(maxLines * 6);
        geo.setAttribute("position", new THREE.BufferAttribute(linePos, 3));
        return geo;
    }, []);

    const materials = useMemo(() => ({
        points: new THREE.PointsMaterial({
            color: 0x64748b,
            size: CONFIG.particleSize,
            transparent: true,
            opacity: 0.8,
            sizeAttenuation: true,
        }),
        lines: new THREE.LineBasicMaterial({
            color: 0x4aa8d8,
            transparent: true,
            opacity: 0.15,
        })
    }), []);

    useFrame((state) => {
        if (!pointsRef.current || !linesRef.current) return;

        const posAttr = pointsRef.current.geometry.getAttribute("position") as THREE.BufferAttribute;
        const posArray = posAttr.array as Float32Array;

        const lineAttr = linesRef.current.geometry.getAttribute("position") as THREE.BufferAttribute;
        const lineArray = lineAttr.array as Float32Array;

        // Convert 2D mouse (NDC) to 3D world coordinates roughly
        // This assumes default camera looking at 0,0,0
        // For z=0 plane:
        const mouseX = (mouseValues.current.x * viewport.width) / 2;
        const mouseY = (mouseValues.current.y * viewport.height) / 2;
        // Keep z somewhat in front to affect particles
        const mouseZ = 0;

        let lineIndex = 0;

        for (let i = 0; i < CONFIG.particleCount; i++) {
            const i3 = i * 3;

            // Update physics
            posArray[i3] += velocities[i3];
            posArray[i3 + 1] += velocities[i3 + 1];
            posArray[i3 + 2] += velocities[i3 + 2];

            // Wrap
            const halfB = CONFIG.boundarySize / 2;
            if (Math.abs(posArray[i3]) > halfB) posArray[i3] = -posArray[i3];
            if (Math.abs(posArray[i3 + 1]) > halfB) posArray[i3 + 1] = -posArray[i3 + 1];
            if (Math.abs(posArray[i3 + 2]) > halfB) posArray[i3 + 2] = -posArray[i3 + 2];

            const px = posArray[i3];
            const py = posArray[i3 + 1];
            const pz = posArray[i3 + 2];

            // Mouse Interaction - Attract + Repel logic
            const dx = mouseX - px;
            const dy = mouseY - py;
            const dz = mouseZ - pz;
            const dist = Math.sqrt(dx * dx + dy * dy + dz * dz);

            if (dist < CONFIG.mouseDistance) {
                // Push away gently if very close (repulsion)
                const force = (CONFIG.mouseDistance - dist) * 0.05;
                posArray[i3] -= dx * force * 0.5;
                posArray[i3 + 1] -= dy * force * 0.5;

                // Draw line to mouse
                if (dist < CONFIG.connectionDistance) {
                    lineArray[lineIndex++] = px;
                    lineArray[lineIndex++] = py;
                    lineArray[lineIndex++] = pz;
                    lineArray[lineIndex++] = mouseX;
                    lineArray[lineIndex++] = mouseY;
                    lineArray[lineIndex++] = mouseZ;
                }
            }

            // Connection Logic
            for (let j = i + 1; j < CONFIG.particleCount; j++) {
                const j3 = j * 3;
                const distSq =
                    (px - posArray[j3]) ** 2 +
                    (py - posArray[j3 + 1]) ** 2 +
                    (pz - posArray[j3 + 2]) ** 2;

                if (distSq < CONFIG.connectionDistance * CONFIG.connectionDistance) {
                    lineArray[lineIndex++] = px;
                    lineArray[lineIndex++] = py;
                    lineArray[lineIndex++] = pz;
                    lineArray[lineIndex++] = posArray[j3];
                    lineArray[lineIndex++] = posArray[j3 + 1];
                    lineArray[lineIndex++] = posArray[j3 + 2];
                }
            }
        }

        // Reset remaining lines
        for (let k = lineIndex; k < lineArray.length; k++) lineArray[k] = 0;

        posAttr.needsUpdate = true;
        lineAttr.needsUpdate = true;
        linesRef.current.geometry.setDrawRange(0, lineIndex / 3);

        // Rotation
        const t = state.clock.getElapsedTime();
        pointsRef.current.rotation.y = t * 0.05;
        linesRef.current.rotation.y = t * 0.05;
    });

    return (
        <>
            <points ref={pointsRef} geometry={geometry} material={materials.points} />
            <lineSegments ref={linesRef} geometry={lineGeometry} material={materials.lines} />
        </>
    );
}

function Scene() {
    return (
        <>
            {/* Dark background but transparent enough to see through if needed */}
            {/* Using CSS for background color mostly, but fog matches */}
            <color attach="background" args={["#111318"]} />
            <fog attach="fog" args={["#111318", 5, 20]} />
            <InteractiveNetwork />
        </>
    );
}

export default function NetworkBackground() {
    return (
        <div className="fixed inset-0 -z-10 bg-[hsl(220,14%,7%)]" aria-hidden="true">
            <Canvas
                dpr={[1, 2]}
                camera={{ position: [0, 0, 7], fov: 60 }}
                gl={{ alpha: true, antialias: false, powerPreference: "high-performance" }}
                style={{ pointerEvents: 'none' }}
            >
                <Scene />
            </Canvas>
        </div>
    );
}
