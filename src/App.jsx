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
    <div className="min-h-screen bg-neutral-100 p-6 font-mono">
      <h1 className="text-3xl font-bold mb-6 text-center">Daily Dots</h1>
      <div className="space-y-6">
        {habits.map((habit, i) => (
          <div key={i} className="bg-white rounded-2xl shadow p-4">
            <input
              type="text"
              placeholder={`Habit ${i + 1}`}
              value={habit}
              onChange={(e) => handleHabitNameChange(i, e.target.value)}
              className="w-full mb-4 p-2 border border-gray-300 rounded"
            />
            <div className="grid grid-cols-7 gap-2 mb-2">
              {daysOfWeek.map((day, j) => (
                <button
                  key={j}
                  onClick={() => toggleCheck(i, j)}
                  className={`h-10 rounded border text-sm font-medium ${
                    habitChecks[i][j] ? 'bg-black text-white' : 'bg-white text-black border-gray-300'
                  }`}
                >
                  {day}
                </button>
              ))}
            </div>
            <p className="text-sm text-gray-500">Streak: {calculateStreak(habitChecks[i])} days</p>
          </div>
        ))}
      </div>
    </div>
  );
}
