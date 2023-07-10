import * as React from "react";

const Pattern = ({style}) => (
    <svg 
        id='patternId' 
        width='100%' 
        height='100%' 
        xmlns='http://www.w3.org/2000/svg'
    >
        <defs>
            <pattern 
                id='a' 
                patternUnits='userSpaceOnUse' 
                width='69.141' 
                height='40' 
                patternTransform='scale(5) rotate(0)'
            >
                <rect 
                    x='0' 
                    y='0' 
                    width='100%' 
                    height='100%' 
                    fill='hsla(122, 39%, 49%, 1)'
                />
                <path 
                d='M69.212 40H46.118L34.57 20 46.118 0h23.094l11.547 20zM57.665 60H34.57L23.023 40 34.57 20h23.095l11.547 20zm0-40H34.57L23.023 0 34.57-20h23.095L69.212 0zM34.57 60H11.476L-.07 40l11.547-20h23.095l11.547 20zm0-40H11.476L-.07 0l11.547-20h23.095L46.118 0zM23.023 40H-.07l-11.547-20L-.07 0h23.094L34.57 20z'  
                strokeWidth='4' 
                stroke='hsla(88, 50%, 53%, 1)' 
                fill='none'/>
            </pattern>
        </defs>
        <rect 
            width='400%' 
            height='400%' 
            transform='translate(0,-100)' 
            fill='url(#a)'
        />
    </svg>
);
export default Pattern;