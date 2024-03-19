import { useEffect, useState } from "react";
import socketIoClient from "socket.io-client";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  const socket = socketIoClient("http://localhost:3007");

  useEffect(() => {
    socket.on("connect", () => {
      console.log("Connected to server");
    });

    socket.on("disconnect", () => {
      console.log("Disconnected from server");
    });

    socket.emit("chat message", "Hello from client");

    socket.on("chat message", (message) => {
      console.log("Recieved message from server", message);
    });
  }, []);

  return <></>;
}

export default App;
