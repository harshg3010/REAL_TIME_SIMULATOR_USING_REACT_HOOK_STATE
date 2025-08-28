import React, { useState } from "react";

function App() {
  const [state, settime] = useState(new Date().toLocaleTimeString());

  function continousTime() {
    settime(new Date().toLocaleTimeString());
  }
  setInterval(continousTime, 1000);

  return (
    <div className="container">
      <h1>{state}</h1>
      <button onClick={continousTime}>Get Time</button>
    </div>
  );
}

export default App;
