import React, { useRef, useEffect, useState } from 'react';
import { select, line, curveCardinal, axisBottom, scaleLinear } from 'd3';

export default function LineChart() {

  const [data, setData] = useState([25, 30, 50, 40, 60, 100, 80, 70]);
  const svgRef = useRef();
  useEffect(() => {
    const svg = select(svgRef.current);
    const xScale = scaleLinear().range([0, 500]).domain([0, data.length - 1]);

    // define axis bottom
    const xAxis = axisBottom(xScale).ticks(data.length -1);

    // binding axis bottom to svg selection
    svg.select(".x-axis").style("transform", "translateY(300px)").call(xAxis);

    // calculate position of each value in data
    const myLine = line()
      .x((value, index) => xScale(index)) // x is __
      .y(value => 300 - value) // y is |
      .curve(curveCardinal) // this line to make border radius for line

    svg.selectAll(".line")
      .data([data])
      .join("path")
      .attr("class", "line")
      .attr("d", value => myLine(value)) // set value for d property
      .attr("fill", "none").attr("stroke", "blue")

  }, [data])
  return (
    <svg ref={svgRef} style={{ background: 'gray', width: '500px', height: '300px' }}>
      <g className="x-axis"></g>
    </svg>
  )
}