"use client";

import { useState } from "react";

function Test() {
  const [state, setState] = useState(0);
  return (
    <div>
      <span>{state}</span>
      <button onClick={() => setState((prev) => prev + 1)}>click</button>
    </div>
  );
}

export default Test;
