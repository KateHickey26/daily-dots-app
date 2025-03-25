import React, { useState } from 'react';

const daysOfWeek = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];

export default function DailyDots() {
  const [habits, setHabits] = useState(['', '', '']);
  const [habitChecks, setHabitChecks] = useState([
    Array(7).fill(false),
    Array(7).fill(false),
    Array(7).fill(false),
  ]);

  const handleHabitNameChange = (index, value) => {
    const newHabits = [...habits];
    newHabits[index] = value;
    setHabits(newHabits);
  };

  const toggleCheck = (habitIndex, dayIndex) => {
    const newChecks = habitChecks.map((checks, i) =>
      i === habitIndex
        ? checks.map((val, j) => (j === dayIndex ? !val : val))
        : checks
    );
    setHabitChecks(newChecks);
  };

  const calculateStreak = (checks) => {
    let streak = 0;
    for (let i = 0; i < checks.length; i++) {
      if (checks[i]) streak++;
      else streak = 0;
    }
    return streak;
  };

  return (
<div className="min-h-screen p-10 font-handwritten bg-neutral-100">
  <h1 className="text-3xl font-bold mb-6 text-center">Daily Dots</h1>
  <div className="relative overflow-visible max-w-3xl mx-auto bg-white border border-gray-300 rounded-xl shadow p-6">    {/* 🎀 Washi tape accents */}
    
    {/* Top tape */}
    <div className="absolute -top-3 -left-4 w-16 h-4 bg-[url('https://www.transparenttextures.com/patterns/paper-fibers.png')] bg-repeat bg-accent rotate-[-6deg] rounded-sm rounded-bl-none opacity-80 shadow-md"></div>
    <div className="absolute -top-3 -right-3 w-16 h-4 bg-[url('https://www.transparenttextures.com/patterns/paper-fibers.png')] bg-repeat bg-accent rotate-[6deg] rounded-sm rounded-bl-none opacity-80 shadow-md"></div>

    {/* Bottom tape */}
    <div className="absolute -bottom-3 -left-4 w-16 h-4 bg-[url('https://www.transparenttextures.com/patterns/paper-fibers.png')] bg-repeat bg-accent rotate-[6deg] rounded-sm rounded-bl-none opacity-80 shadow-md"></div>
    <div className="absolute -bottom-3 -right-3 w-16 h-4 bg-[url('https://www.transparenttextures.com/patterns/paper-fibers.png')] bg-repeat bg-accent rotate-[-10deg] rounded-sm rounded-bl-none opacity-80 shadow-md"></div>

    <table className="min-w-full border border-gray-300 rounded-xl">
      <thead className="bg-paper text-ink">
        <tr>
          <th className="p-3 text-left">Habit</th>
          {daysOfWeek.map((day, j) => (
            <th key={j} className="p-3 text-sm">{day}</th>
          ))}
        </tr>
      </thead>
      <tbody className="bg-white">
        {habits.map((habit, i) => (
          <tr key={i} className="border-t border-gray-200">
            <td className="p-3">
              <input
                type="text"
                placeholder={`Habit ${i + 1}`}
                value={habit}
                onChange={(e) => handleHabitNameChange(i, e.target.value)}
                className="w-full p-1 border-b border-gray-300 bg-transparent focus:outline-none"
              />
            </td>
            {daysOfWeek.map((_, j) => (
              <td key={j} className="p-2 text-center">
                <button
                  onClick={() => toggleCheck(i, j)}
                  className={`w-8 h-8 rounded-sm border-2 transition ${
                    habitChecks[i][j]
                      ? 'bg-accent border-accent text-white'
                      : 'bg-white border-gray-300'
                  }`}
                >
                  {habitChecks[i][j] ? '✓' : ''}
                </button>
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
    
  </div>
</div>
  );
}
