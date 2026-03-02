"use client";

/**
 * NetworkBackground Component
 * 
 * An advanced interactive background featuring:
 * - 2D Canvas particle system with connections
 * - Mouse interaction (particles connect to cursor)
 * - Custom cursor with trailing effect
 * - Noise overlay and scanline effects
 * - Grid background pattern
 * - Performance optimized with requestAnimationFrame
 */

import { useRef, useEffect, useCallback } from "react";

// Configuration
const CONFIG = {
    particleCount: 90,
    connectionDistance: 100,
    mouseConnectionDistance: 130,
    particleSpeed: 0.4,
    particleMinRadius: 0.3,
    particleMaxRadius: 1.5,
    lineOpacity: 0.08,
    mouseLineOpacity: 0.3,
    particleColor: "0,247,255", // Cyan RGB
};

interface Particle {
    x: number;
    y: number;
    vx: number;
    vy: number;
    r: number;
    a: number; // animation phase
}

export default function NetworkBackground() {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const cursorRef = useRef<HTMLDivElement>(null);
    const cursorTrailRef = useRef<HTMLDivElement>(null);
    const particlesRef = useRef<Particle[]>([]);
    const mouseRef = useRef({ x: -9999, y: -9999 });
    const trailRef = useRef({ x: 0, y: 0 });
    const animationRef = useRef<number>(0);
    const trailAnimationRef = useRef<number>(0);

    // Initialize particles
    const initParticles = useCallback((width: number, height: number) => {
        const particles: Particle[] = [];
        for (let i = 0; i < CONFIG.particleCount; i++) {
            particles.push({
                x: Math.random() * width,
                y: Math.random() * height,
                vx: (Math.random() - 0.5) * CONFIG.particleSpeed,
                vy: (Math.random() - 0.5) * CONFIG.particleSpeed,
                r: Math.random() * CONFIG.particleMaxRadius + CONFIG.particleMinRadius,
                a: Math.random(),
            });
        }
        particlesRef.current = particles;
    }, []);

    // Animation loop
    const animate = useCallback(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext("2d");
        if (!ctx) return;

        const W = canvas.width;
        const H = canvas.height;
        const particles = particlesRef.current;
        const mouse = mouseRef.current;

        ctx.clearRect(0, 0, W, H);

        for (let i = 0; i < particles.length; i++) {
            const p = particles[i];

            // Update position
            p.x += p.vx;
            p.y += p.vy;

            // Wrap around edges
            if (p.x < 0) p.x = W;
            if (p.x > W) p.x = 0;
            if (p.y < 0) p.y = H;
            if (p.y > H) p.y = 0;

            // Update animation phase
            p.a += 0.008;
            const alpha = (Math.sin(p.a) * 0.5 + 0.5) * 0.6;

            // Draw particle
            ctx.beginPath();
            ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
            ctx.fillStyle = `rgba(${CONFIG.particleColor},${alpha})`;
            ctx.fill();

            // Connect to nearby particles
            for (let j = i + 1; j < particles.length; j++) {
                const q = particles[j];
                const dx = p.x - q.x;
                const dy = p.y - q.y;
                const dist = Math.sqrt(dx * dx + dy * dy);

                if (dist < CONFIG.connectionDistance) {
                    ctx.beginPath();
                    ctx.moveTo(p.x, p.y);
                    ctx.lineTo(q.x, q.y);
                    ctx.strokeStyle = `rgba(${CONFIG.particleColor},${CONFIG.lineOpacity * (1 - dist / CONFIG.connectionDistance)})`;
                    ctx.lineWidth = 0.4;
                    ctx.stroke();
                }
            }

            // Connect to mouse
            const mdx = p.x - mouse.x;
            const mdy = p.y - mouse.y;
            const mouseDist = Math.sqrt(mdx * mdx + mdy * mdy);

            if (mouseDist < CONFIG.mouseConnectionDistance) {
                ctx.beginPath();
                ctx.moveTo(p.x, p.y);
                ctx.lineTo(mouse.x, mouse.y);
                ctx.strokeStyle = `rgba(${CONFIG.particleColor},${CONFIG.mouseLineOpacity * (1 - mouseDist / CONFIG.mouseConnectionDistance)})`;
                ctx.lineWidth = 0.6;
                ctx.stroke();
            }
        }

        animationRef.current = requestAnimationFrame(animate);
    }, []);

    // Cursor trail animation
    const animateTrail = useCallback(() => {
        const trail = trailRef.current;
        const mouse = mouseRef.current;
        const trailEl = cursorTrailRef.current;

        trail.x += (mouse.x - trail.x) * 0.12;
        trail.y += (mouse.y - trail.y) * 0.12;

        if (trailEl) {
            trailEl.style.left = `${trail.x}px`;
            trailEl.style.top = `${trail.y}px`;
        }

        trailAnimationRef.current = requestAnimationFrame(animateTrail);
    }, []);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        // Setup canvas size
        const resize = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
            if (particlesRef.current.length === 0) {
                initParticles(canvas.width, canvas.height);
            }
        };

        // Mouse move handler
        const handleMouseMove = (e: MouseEvent) => {
            mouseRef.current.x = e.clientX;
            mouseRef.current.y = e.clientY;

            if (cursorRef.current) {
                cursorRef.current.style.left = `${e.clientX}px`;
                cursorRef.current.style.top = `${e.clientY}px`;
            }
        };

        // Hover effects for interactive elements
        const handleMouseEnter = () => {
            if (cursorRef.current) {
                cursorRef.current.style.transform = "translate(-50%, -50%) scale(2.5)";
            }
            if (cursorTrailRef.current) {
                cursorTrailRef.current.style.transform = "translate(-50%, -50%) scale(1.4)";
            }
        };

        const handleMouseLeave = () => {
            if (cursorRef.current) {
                cursorRef.current.style.transform = "translate(-50%, -50%) scale(1)";
            }
            if (cursorTrailRef.current) {
                cursorTrailRef.current.style.transform = "translate(-50%, -50%) scale(1)";
            }
        };

        // Add hover listeners to interactive elements
        const addHoverListeners = () => {
            const interactiveElements = document.querySelectorAll("a, button, [role='button'], .interactive");
            interactiveElements.forEach((el) => {
                el.addEventListener("mouseenter", handleMouseEnter);
                el.addEventListener("mouseleave", handleMouseLeave);
            });
        };

        resize();
        window.addEventListener("resize", resize);
        window.addEventListener("mousemove", handleMouseMove);

        // Start animations
        animate();
        animateTrail();

        // Setup hover listeners after a short delay to ensure DOM is ready
        const hoverTimeout = setTimeout(addHoverListeners, 100);

        // MutationObserver to add listeners to dynamically added elements
        const observer = new MutationObserver(() => {
            addHoverListeners();
        });

        observer.observe(document.body, { childList: true, subtree: true });

        return () => {
            window.removeEventListener("resize", resize);
            window.removeEventListener("mousemove", handleMouseMove);
            cancelAnimationFrame(animationRef.current);
            cancelAnimationFrame(trailAnimationRef.current);
            clearTimeout(hoverTimeout);
            observer.disconnect();
        };
    }, [animate, animateTrail, initParticles]);

    return (
        <>
            {/* Custom Cursor */}
            <div
                ref={cursorRef}
                className="cursor-main"
                aria-hidden="true"
            />
            <div
                ref={cursorTrailRef}
                className="cursor-trail"
                aria-hidden="true"
            />

            {/* Particle Canvas */}
            <canvas
                ref={canvasRef}
                className="fixed inset-0 z-0 pointer-events-none"
                aria-hidden="true"
            />

            {/* Grid Background */}
            <div className="grid-bg" aria-hidden="true" />

            {/* Noise Overlay */}
            <div className="noise-overlay" aria-hidden="true" />

            {/* Scanline Effect */}
            <div className="scanline-overlay" aria-hidden="true" />
        </>
    );
}
