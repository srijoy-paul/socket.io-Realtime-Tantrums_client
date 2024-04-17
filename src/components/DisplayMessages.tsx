import { useContext } from "react";
import Message from "./Message";
import { messagesContext } from "../App";

function DisplayMessages() {
  const messages = useContext(messagesContext);
  console.log(messages);

  return (
    <div style={{ flex: "7", border: "" }}>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          height: "586px",
          border: "2px solid green",
          overflowY: "scroll",
        }}
      >
        {messages?.map((message, index) => {
          return <Message key={index} message={message} />;
        })}
      </div>
    </div>
  );
}

export default DisplayMessages;
