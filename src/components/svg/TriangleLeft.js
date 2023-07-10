import * as React from "react";

const TriangleLeft = ({style}) => {
  console.log(style.x)
  return (
  <svg
    className="left-tri"
    width={200}
    height={200}
    viewBox="0 0 200 200"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    style={{ transform: `translateX(${style.x}%) translateY(${style.y}%) matrix(-1,0,0,1,0,0)`}}
  >
    <path d="M0 200L100 100L200 1.0968e-05L200 200L0 200Z" fill="#0073b6" />
  </svg>
)};
export default TriangleLeft;