export default function Overlay() {
  return (
    <div
      className="poptrox-overlay"
      style={{
        position: "fixed",
        left: 0,
        top: 0,
        zIndex: 20000,
        width: "100%",
        height: "100%",
        textAlign: "center",
        cursor: "pointer",
        display: "none",
      }}
    >
      <div
        style={{
          display: "inline-block",
          height: "100%",
          verticalAlign: "middle",
        }}
      ></div>
      <div
        style={{
          position: "absolute",
          left: 0,
          top: 0,
          width: "100%",
          height: "100%",
          background: "#000000",
          opacity: 0,
          filter: "alpha(opacity=0)",
        }}
      ></div>
      <div
        className="poptrox-popup"
        style={{
          display: "none",
          verticalAlign: "middle",
          position: "relative",
          zIndex: 1,
          cursor: "pointer",
          minWidth: 150,
          minHeight: 150,
        }}
      >
        <div className="loader" style={{ display: "none" }}></div>
        <div className="pic" style={{ display: "none" }}></div>
        <div className="caption" style={{ display: "none" }}></div>
        <span
          className="closer"
          style={{ cursor: "pointer", display: "none" }}
        ></span>
        <div className="nav-previous" style={{ display: "none" }}></div>
        <div className="nav-next" style={{ display: "none" }}></div>
      </div>
    </div>
  );
}
