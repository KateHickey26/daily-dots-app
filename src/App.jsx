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
    <div className="min-h-screen p-10 font-body bg-neutral-100">
      <h1 className="text-4xl font-title mb-6 text-center">Daily Dots</h1>
      <div
      className="relative overflow-visible max-w-3xl mx-auto border border-gray-300 rounded-xl shadow p-6"
      style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='16' height='16' viewBox='0 0 16 16' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Ccircle cx='1' cy='1' r='0.8' fill='%23ccc'/%3E%3C/svg%3E")`,
        backgroundColor: '#fafafa',
        backgroundRepeat: 'repeat',
      }}
    >
    
    {/* Washi tape accents */}
    {/* Top tape */}
    <div
      className="absolute -top-3 -left-4 w-16 h-4 rotate-[-6deg] rounded-sm rounded-bl-none shadow-md animate-tape-drop"
      style={{
        backgroundImage: `
          linear-gradient(white, white),
          url('https://www.transparenttextures.com/patterns/diagonal-noise.png')
        `,
        backgroundBlendMode: 'multiply',
        animationDelay: '0.2s',
        opacity: 0,
      }}
    ></div>
    <div
      className="absolute -top-3 -right-4 w-16 h-4 rotate-[6deg] rounded-sm rounded-bl-none shadow-md animate-tape-drop"
      style={{
        backgroundImage: `
          linear-gradient(white, white),
          url('https://www.transparenttextures.com/patterns/skulls.png')
        `,
        backgroundBlendMode: 'multiply',
        animationDelay: '0.2s',
        opacity: 0,
      }}
    ></div>
    {/* Bottom tape */}
    <div
      className="absolute -bottom-3 -left-4 w-16 h-4 rotate-[6deg] rounded-sm rounded-bl-none shadow-md animate-tape-drop"
      style={{
        backgroundImage: `
          linear-gradient(white, white),
          url('https://www.transparenttextures.com/patterns/skulls.png')
        `,
        backgroundBlendMode: 'multiply',
        animationDelay: '0.2s',
        opacity: 0,
      }}
    ></div>
    <div
      className="absolute -bottom-3 -right-4 w-16 h-4 rotate-[-10deg] rounded-sm rounded-bl-none shadow-md animate-tape-drop"
      style={{
        backgroundImage: `
          linear-gradient(white, white),
          url('https://www.transparenttextures.com/patterns/diagonal-noise.png')
        `,
        backgroundBlendMode: 'multiply',
        animationDelay: '0.2s',
        opacity: 0,
      }}
    ></div>

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

  {/* Font previews */}
  <div className="max-w-3xl mx-auto mt-10 space-y-6">
  <h2 className="text-2xl font-semibold mb-2">🖋️ Font Preview</h2>

  <p className="font-caveat text-xl">This is Caveat — neat, casual, and spacious.</p>
  <p className="font-gloria text-xl">This is Gloria Hallelujah — fun, bouncy handwriting.</p>
  <p className="font-shadows text-xl">This is Shadows Into Light — soft, handwritten script.</p>
  <p className="font-handlee text-xl">This is Handlee — rounded and relaxed.</p>
  <p className="font-indie text-xl">Indie Flower – bubbly and casual</p>
  <p className="font-coming text-xl">Coming Soon – loose and airy</p>
  <p className="font-amatic text-xl">Amatic SC – tall, sketchy, great for headers</p>
  <p className="font-schoolbell text-xl">Schoolbell – notebook-style fun</p>
  <p className="font-delius text-xl">Delius – rounded, soft, and balanced</p>

</div>
</div>

  );
}
