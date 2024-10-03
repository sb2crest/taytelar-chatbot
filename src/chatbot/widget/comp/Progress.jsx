import * as React from "react";

const Dot = ({ position, isDotGreen }) => (
  <div
    style={{
      position: "absolute",
      top: `${position}%`,
      left: "50%",
      transform: "translate(-50%, -50%)",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    }}
  >
    <div
      style={{
        width: "6.5px",
        height: "6.5px",
        borderRadius: "50%",
        backgroundColor: isDotGreen ? "#43ec54" : "grey",
      }}
    />
    {/* <div
      style={{
        position: "absolute",
        width: "11px",
        height: "11px",
        borderRadius: "50%",
        border: `1px solid ${isDotGreen ? "#43ec54" : "grey"}`,
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        pointerEvents: "none",
      }}
    /> */}
  </div>
);

export default function Progress() {
  const [progress, setProgress] = React.useState(0);

  React.useEffect(() => {
    const timer = setInterval(() => {
      setProgress((oldProgress) => {
        if (oldProgress === 100) {
          return 0;
        }
        const diff = Math.random() * 10;
        return Math.min(oldProgress + diff, 100);
      });
    }, 500);

    return () => clearInterval(timer);
  }, []);

  const dotPositions = [0, 20, 40, 60,80, 100]; // Positions of the dots on the line

  return (
    <div
      style={{
        width: "20px",  // Narrow width for the vertical bar
        height: "126px", // Fixed height of the container
        position: "relative",
        margin: "7px auto",
      }}
    >
      {/* Progress bar */}
      <div
        style={{
          position: "absolute",
          left: "50%",
          transform: "translateX(-50%)",
          width: "2px",
          height: "100%",
          backgroundColor: "grey",
        }}
      >
        {/* Progress bar fill */}
        <div
          style={{
            width: "2px",
            height: `${progress}%`,
            backgroundColor: "#43ec54",
          }}
        />
      </div>

      {/* Dots */}
      {dotPositions.map((position, index) => {
        const isDotGreen = progress >= position;
        return <Dot key={index} position={position} isDotGreen={isDotGreen} />;
      })}
    </div>
  );
}
