import React, { useEffect, useRef } from 'react';
import * as d3 from 'd3';

export const Hero: React.FC = () => {
  const svgRef = useRef<SVGSVGElement>(null);

  useEffect(() => {
    if (!svgRef.current) return;

    const svg = d3.select(svgRef.current);
    const width = svgRef.current.clientWidth;
    const height = 400;

    svg.attr("width", width).attr("height", height);

    // Clear previous
    svg.selectAll("*").remove();

    // Data for nodes
    const numNodes = 60;
    const nodes = Array.from({ length: numNodes }, (_, i) => ({
      id: i,
      r: Math.random() * 5 + 2,
      x: Math.random() * width,
      y: Math.random() * height,
    }));

    const links: { source: any; target: any }[] = [];
    for(let i=0; i<numNodes; i++) {
        for(let j=i+1; j<numNodes; j++) {
            if (Math.random() > 0.92) {
                links.push({ source: i, target: j });
            }
        }
    }

    const simulation = d3.forceSimulation(nodes as any)
      .force("charge", d3.forceManyBody().strength(-30))
      .force("link", d3.forceLink(links).id((d: any) => d.id).distance(100))
      .force("center", d3.forceCenter(width / 2, height / 2))
      .force("x", d3.forceX().strength(0.05))
      .force("y", d3.forceY().strength(0.05));

    const link = svg.append("g")
      .attr("stroke", "#e9ecef")
      .attr("stroke-opacity", 0.6)
      .selectAll("line")
      .data(links)
      .join("line")
      .attr("stroke-width", 1.5);

    const node = svg.append("g")
      .selectAll("circle")
      .data(nodes)
      .join("circle")
      .attr("r", (d: any) => d.r)
      .attr("fill", (d, i) => i % 2 === 0 ? "#fc03ad" : "#cbd5e1") // Updated color
      .attr("fill-opacity", 0.7)
      .call(drag(simulation) as any);

    // Add interactivity
    svg.on("mousemove", (event) => {
      const [mx, my] = d3.pointer(event);
      simulation.alphaTarget(0.3).restart();
      
      // Gentle repel from mouse
      simulation.force("mouse", d3.forceRadial(150, mx, my).strength(-0.1));
    });
    
    svg.on("mouseleave", () => {
         simulation.force("mouse", null);
         simulation.alphaTarget(0);
    });

    simulation.on("tick", () => {
      link
        .attr("x1", (d: any) => d.source.x)
        .attr("y1", (d: any) => d.source.y)
        .attr("x2", (d: any) => d.target.x)
        .attr("y2", (d: any) => d.target.y);

      node
        .attr("cx", (d: any) => d.x)
        .attr("cy", (d: any) => d.y);
    });

    function drag(sim: any) {
      function dragstarted(event: any, d: any) {
        if (!event.active) sim.alphaTarget(0.3).restart();
        d.fx = d.x;
        d.fy = d.y;
      }

      function dragged(event: any, d: any) {
        d.fx = event.x;
        d.fy = event.y;
      }

      function dragended(event: any, d: any) {
        if (!event.active) sim.alphaTarget(0);
        d.fx = null;
        d.fy = null;
      }

      return d3.drag()
        .on("start", dragstarted)
        .on("drag", dragged)
        .on("end", dragended);
    }

    return () => {
      simulation.stop();
    };
  }, []);

  return (
    <div className="w-full h-64 md:h-96 bg-gradient-to-br from-white to-gray-50 relative overflow-hidden flex items-center justify-center">
       <svg ref={svgRef} className="absolute inset-0 w-full h-full cursor-pointer" />
       <div className="relative z-10 pointer-events-none text-center px-4">
           <h1 className="text-4xl md:text-6xl font-serif font-bold text-gray-900 tracking-tight mb-2">
               I know that I know nothing
           </h1>
           <p className="text-gray-500 text-lg md:text-xl font-light tracking-wide uppercase">
               Σ &middot; Socrates &middot; ∫ 
           </p>
       </div>
    </div>
  );
};