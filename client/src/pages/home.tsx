import useWebSocket from "../socket";
import { useState } from "react";

export default function Home() {
  const [text, setText] = useState("");
  const socket = useWebSocket();

  return (
    <>
      <h3>This is the home page</h3>
      <input type="text" onChange={(e) => setText(e.target.value)}></input>
      <button
        onClick={() => {
          socket.socket.current?.send(text);
        }}
      >
        Click me
      </button>
    </>
  );
}
