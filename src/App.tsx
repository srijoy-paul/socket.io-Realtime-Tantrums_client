import { createContext, useEffect, useState } from "react";
import socketIoClient from "socket.io-client";
import Form from "./components/Form";
import ioSocketContext from "./utils/contextUtils";
import DisplayMessages from "./components/DisplayMessages";
import LeftSideBar from "./components/LeftSideBar";
import RightSideBar from "./components/RightSideBar";
// import "./App.css";
export const messagesContext = createContext([]);
function App() {
  const socket = socketIoClient("http://localhost:3007"); //socket server url, that the clients will connect with
  // console.log(socket);
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    socket.on("connect", () => {
      console.log("Connected to server");
    });

    socket.on("disconnect", () => {
      console.log("Disconnected from server");
    });

    socket.emit("chat message", "A User connected");

    socket.on("chat message", (message) => {
      console.log("Recieved message from server", message);
      setMessages((prevMessages, index) => {
        return [...prevMessages, message];
      });
    });
  }, []);

  return (
    <>
      <ioSocketContext.Provider value={socket}>
        <messagesContext.Provider value={messages}>
          <div
            style={{
              display: "flex",
              width: "100vw",
              height: "100%",
              flexWrap: "wrap",
            }}
          >
            <LeftSideBar />
            <div
              style={{
                flex: "4.5",
                display: "flex",
                flexDirection: "column",
                gap: "5px",
                // height: "100%",
                // justifyContent: "space-between",
                // border: "2px solid green",
              }}
            >
              <DisplayMessages />
              <Form />
            </div>
            <RightSideBar />
          </div>
        </messagesContext.Provider>
      </ioSocketContext.Provider>
    </>
  );
}

export default App;
