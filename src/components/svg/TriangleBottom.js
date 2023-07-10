import * as React from "react";

const TriangleBottom = ({style}) => (
  <svg
    className="bottom-tri"
    width={200}
    height={200}
    viewBox="0 0 200 200"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    style={{ transform: `translateX(${style}%)`}}
  >
    <path d="M0 200L100 100L200 1.0968e-05L200 200L0 200Z" fill="#89D4ED" />
  </svg>
);
export default TriangleBottom;