import Person from "./Person";

function LeftSideBar() {
  return (
    <div
      style={{
        flex: "1",
        borderRight: "1px solid goldenrod",
        display: "flex",
        flexDirection: "column",
        gap: "2px",
        // backgroundColor: "#F1FAEE",
      }}
    >
      <div style={{ flex: "1" }}>
        <h2
          style={{
            borderBottom: "1px solid #3FC1C9",
            display: "flex",
            alignItems: "start",
            justifyContent: "flex-start",
            // height: "150px",
            padding: "12px 4px",
          }}
        >
          <span style={{}}>People</span>
        </h2>
        <div id="search-bar">
          <input
            type="search"
            name="people-search"
            id="people-search"
            style={{
              width: "100%",
              padding: "8px 5px",
              marginTop: "5px",
              borderRadius: "20px",
              border: "none",
              outline: "none",
            }}
          />
        </div>
      </div>
      <div
        style={{
          // border: "2px solid blue",
          display: "flex",
          flex: "8",
          flexDirection: "column",
          padding: "15px 0",
          gap: "7px",
        }}
        id="peoples"
      >
        <Person />
      </div>
    </div>
  );
}

export default LeftSideBar;
