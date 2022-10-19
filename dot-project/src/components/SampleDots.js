import React from 'react';
import "./SampleDots.css";

function SampleDots() {
  let oneDot = <div className="sample-dot" />
  let tenThousand = oneDot.repeat(10000)

  return <div>{tenThousand}</div>
}

export default SampleDots;
