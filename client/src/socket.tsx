import { useEffect, useRef } from "react";
// import { useNavigate } from "react-router-dom";

const PORT = 4747;

export default function useWebSocket() {
  // const navigate = useNavigate();
  const socket = useRef<WebSocket>();

  useEffect(() => {
    socket.current = new WebSocket(`ws://localhost:${PORT}/socket`);

    socket.current.onopen = () => {
      console.log(`[CLIENT] Socket Opened`);
    };

    socket.current.onclose = (event) => {
      console.log(`[CLIENT] Socket closed`);
    };

    socket.current.onmessage = (event: MessageEvent<string>) => {
      console.log(`[CLIENT] Message Received: ${event.data}`);
    };

    return () => {
      socket.current?.close();
    };
  }, []);

  return {
    "socket": socket
  };
}
