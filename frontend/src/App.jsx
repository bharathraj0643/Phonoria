import { useState } from "react";
import { ENV } from "./constants/env.js";

function App() {
  return (
    <>
      <div>{ENV.API_URL}</div>
    </>
  );
}

export default App;
