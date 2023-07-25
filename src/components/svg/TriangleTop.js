import * as React from "react";

const TriangleTop = ({ style }) => (
  <svg
    className={style.classname}
    width={200}
    height={200}
    viewBox="0 0 200 200"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    style={{ transform: `translateX(${style.style}%) matrix(-1, 1.2246467991473532e-16, -1.2246467991473532e-16, -1, 0, 0)` }}
  >
    <path d="M0 200L100 100L200 1.0968e-05L200 200L0 200Z" fill={style.fill} stroke={style.stroke} />
  </svg>
);

export default TriangleTop;
