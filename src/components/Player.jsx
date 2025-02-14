import { useState, useRef } from "react";

export default function Player() {
  const playerN = useRef();
  const [pName, setPName] = useState(null);

  function handleClick() {
    setPName(playerN.current.value);
  }
  return (
    <section id="player">
      <h2>Welcome {pName ?? "unknown entity"} </h2>
      <p>s
        <input type="text" ref={playerN} />
        <button onClick={handleClick}>Set Name</button>
      </p>
    </section>
  );
}
