function Person() {
  return (
    <>
      <div
        style={{
          //   border: "1px solid goldenrod",
          height: "50px",
          borderRadius: "7px",
          margin: "0 7px",
          display: "flex",
          cursor: "pointer",
          backgroundColor: "#00ADB5",
        }}
      >
        <div style={{ padding: "4px", flex: "1" }}>
          <img
            src="https://img.freepik.com/free-psd/3d-illustration-human-avatar-profile_23-2150671142.jpg"
            alt=""
            style={{
              height: "100%",
              width: "100%",
              borderRadius: "65px",
              border: "2px solid khaki",
            }}
          />
        </div>
        <div
          style={{
            flex: "4",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            // border: "2px solid khaki",
          }}
        >
          <span>Your name</span>
        </div>
      </div>
    </>
  );
}

export default Person;
