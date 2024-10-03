import React from "react";
import { Box } from "@mui/material";

const Dot = ({ position, isDotGreen }) => (
  <div
    style={{
      position: "absolute",
      left: `${position}%`, // Adjusting left position for horizontal layout
      top: "50%",
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
    <div
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
    />
  </div>
);

export default function LinearProgressLine() {
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

  const dotPositions = [0, 33, 66, 100]; // Positions of the dots along the horizontal progress bar

  return (
    <Box
      sx={{
        width: "80%",  // Width for the horizontal bar
        height: "20px",  // Fixed height of the container
        position: "relative",
        margin: "20px auto",
      }}
    >
      {/* Progress bar */}
      <div
        style={{
          position: "absolute",
          top: "50%",
          left: 0,
          width: "100%",
          height: "2px",
          backgroundColor: "grey",
          transform: "translateY(-50%)",
        }}
      >
        {/* Progress bar fill */}
        <div
          style={{
            width: `${progress}%`,
            height: "2px",
            backgroundColor: "#43ec54",
          }}
        />
      </div>

      {/* Dots */}
      {dotPositions.map((position, index) => {
        const isDotGreen = progress >= position;
        return <Dot key={index} position={position} isDotGreen={isDotGreen} />;
      })}
    </Box>
  );
}
