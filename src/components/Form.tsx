import { useContext } from "react";
// import { Socket } from "socket.io-client";
import ioSocketContext from "../utils/contextUtils";

function Form() {
  const socket = useContext(ioSocketContext);
  const handleSubmit = (e) => {
    e.preventDefault();
    const form = document.getElementById("form");
    const input = document.getElementById("input");
    console.log(input.value);

    if (input.value) {
      socket.emit("chat message", input.value);
      input.value = "";
    }
  };
  return (
    <>
      <form
        style={{
          flex: "1",
          // display: "flex",
          // width: "100%",
          border: "2px solid steelblue",
        }}
        id="form"
        onSubmit={handleSubmit}
      >
        <div
          style={{
            display: "flex",
            // alignItems: "center",
            // border: "2px solid purple",
            height: "100%",
            width: "100%",
            alignItems: "end",
            // justifySelf: "center",
          }}
        >
          <input
            id="input"
            type="text"
            placeholder="Enter your text overhere"
            style={{ flex: "1", height: "45px" }}
          />
          <button type="submit">Send</button>
        </div>
      </form>
    </>
  );
}

export default Form;
