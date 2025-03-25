// src/CurvedBunting.jsx
import React from 'react';

const buntingFlags = [
    { letter: 'H', top: '10rem', left: '1rem', rotate: '15deg' },
    { letter: 'A', top: '10.5rem', left: '4rem', rotate: '5deg' },
    { letter: 'B', top: '10.8rem', left: '7rem', rotate: '2deg' },
    { letter: 'I', top: '11rem', left: '10rem', rotate: '0deg' },
    { letter: 'T', top: '10.8rem', left: '13rem', rotate: '-6deg' },
    { letter: 'T', top: '10rem', left: '17rem', rotate: '-20deg' },
    { letter: 'R', top: '8.5rem', left: '19.5rem', rotate: '-25deg' },
    { letter: 'A', top: '6.9rem', left: '21.5rem', rotate: '-40deg' },
    { letter: 'C', top: '4.5rem', left: '23rem', rotate: '-40deg' },
    { letter: 'K', top: '3rem', left: '25rem', rotate: '-50deg' },
    { letter: 'E', top: '1.8rem', left: '27rem', rotate: '-50deg' },
    { letter: 'R', top: '0rem', left: '29rem', rotate: '-65deg' },
  ];

const pastelColors = [
  'bg-pink-200',
  'bg-blue-200',
  'bg-green-200',
  'bg-yellow-200',
];

export default function CurvedBunting() {
  return (
    <div className="absolute z-10 pointer-events-none">
      {buntingFlags.map((flag, i) => (
        <div
          key={i}
          className={`absolute w-9 h-10 text-white font-title text-sm flex items-center justify-center rounded-md shadow ${pastelColors[i % pastelColors.length]}`}
          style={{
            top: flag.top,
            left: flag.left,
            transform: `rotate(${flag.rotate})`,
          }}
        >
          {flag.letter}
        </div>
      ))}
    </div>
  );
}