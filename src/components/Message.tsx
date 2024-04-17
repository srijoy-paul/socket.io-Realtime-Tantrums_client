import React from "react";

function Message({ message }) {
  return (
    <div
      style={{
        border: "2px solid blue",
        width: "250px",
        margin: "5px",
        padding: "7px 15px",
        borderRadius: "10px",
        borderTopLeftRadius: "0",
      }}
    >
      {message}
    </div>
  );
}

export default Message;
