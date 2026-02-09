"use client";

import React, { useEffect, useState } from "react";
import mermaid from "mermaid";

// Initialize mermaid
mermaid.initialize({
    startOnLoad: false,
    theme: "dark",
    securityLevel: "loose",
    fontFamily: "inherit",
});

interface MermaidProps {
    chart: string;
}

const Mermaid: React.FC<MermaidProps> = ({ chart }) => {
    const [svg, setSvg] = useState<string>("");
    const [error, setError] = useState<boolean>(false);

    useEffect(() => {
        const renderChart = async () => {
            try {
                const id = `mermaid-${Math.random().toString(36).substr(2, 9)}`;
                const { svg } = await mermaid.render(id, chart);
                setSvg(svg);
                setError(false);
            } catch (err) {
                console.error("Failed to render mermaid chart:", err);
                setError(true);
            }
        };

        if (chart) {
            renderChart();
        }
    }, [chart]);

    if (error) {
        return (
            <div className="p-4 border border-red-500 rounded bg-red-50 text-red-500 text-sm">
                Failed to render diagram
                <pre className="mt-2 text-xs">{chart}</pre>
            </div>
        );
    }

    if (!svg) {
        return (
            <div className="flex justify-center p-8 animate-pulse bg-[hsl(var(--color-bg-secondary))] rounded-lg">
                <span className="text-[hsl(var(--color-text-tertiary))]">Loading diagram...</span>
            </div>
        );
    }

    return (
        <div
            className="mermaid-chart flex justify-center my-8 overflow-x-auto p-4 bg-[hsl(var(--color-bg-secondary))] rounded-lg border border-[hsl(var(--color-border))]"
            dangerouslySetInnerHTML={{ __html: svg }}
        />
    );
};

export default Mermaid;
