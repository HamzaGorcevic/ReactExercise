import { useEffect, useState } from "react";

export default function GuessTheColor() {
  const [color, setColor] = useState("");
  const [colors, setColors] = useState([]);
  const [change, setChange] = useState(true);
  const [points, setPoints] = useState(0);

  const hexa = [
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
  ];

  let arr = [];
  useEffect(() => {
    setColors(arr);
    while (arr.length !== 3) {
      arr.push(
        [...hexa]
          .sort(() => 0.5 - Math.random())
          .slice(0, 6)
          .join("")
      );
    }
    let random = Math.floor(Math.random() * arr.length);
    setColor(arr[random]);
  }, [change]);

  function CorrectColor(colorC) {
    if (colorC == color) {
      setChange(!change);
      setPoints(points + 1);
    } else {
      setChange(!change);
      setPoints(points - 1);
    }
  }
  return (
    <div
      className="d-flex align-items-center justify-content-center bg-primary container-fluid"
      style={{ height: "100vh" }}
    >
      <h1>YOUR POINTS {points}</h1>
      <div>
        <div style={{ width: 600, height: 600, background: `#${color}` }}></div>
        <div className="d-flex w-100">
          {colors.map((colorC) => {
            return (
              <button
                onClick={() => {
                  CorrectColor(colorC);
                }}
              >
                {colorC}
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}
