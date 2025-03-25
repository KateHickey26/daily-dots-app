import React, { useState, useRef, useEffect } from 'react';

const daysOfWeek = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
const today = new Date();
const currentDay = today.getDate();
const currentMonth = today.toLocaleString('default', { month: 'long' });
const currentYear = today.getFullYear();

// Get all days of the current month
const daysInMonth = new Date(currentYear, today.getMonth() + 1, 0).getDate();
const dayArray = Array.from({ length: daysInMonth }, (_, i) => i + 1);

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

  const getTodayIndex = () => {
    const jsDay = new Date().getDay(); // Sunday = 0
    return jsDay === 0 ? 6 : jsDay - 1; // Our array starts with Monday = 0
  };

  const calculateStreak = (checks) => {
    const today = new Date().getDay(); // Sunday = 0
    const todayIndex = today === 0 ? 6 : today - 1; // align to your Mon–Sun array
  
    let streak = 0;
    for (let i = todayIndex; i >= 0; i--) {
      if (checks[i]) {
        streak++;
      } else {
        break;
      }
    }
    return streak;
  };

  return (
    
    <div className="relative min-h-screen pt-20 p-10 font-body bg-neutral-100">

      {/* Bunting */}
      <img
        src="/bunting-transparent.png"  
        alt="Habit Tracker bunting"
        className="absolute top-4 left-0 w-[50%] max-w-[500px] z-10 pointer-events-none opacity-70 rotate-[-5deg]"
      />

      {/* Heading */}
      <header className="relative mb-20 max-w-5xl mx-auto px-4">
        <h1 className="text-5xl md:text-6xl font-body text-center">Daily Dots</h1>
        {/* Calendar */}
        <div className="absolute -top-10 right-0 w-28 p-2 rounded-md shadow-md text-center text-[10px] bg-green-100 border border-green-200 hover:rotate-[3deg] hover:-translate-y-0.5 transition-transform duration-200 ease-in-out">
        <div className="text-xs font-delius tracking-wide text-gray-800 mb-1 leading-none">
          {currentMonth}
        </div>
        <div className="text-[8px] text-gray-400 mb-0">{currentYear}</div>
          <div className="grid grid-cols-7 gap-0.2 text-[8px]">
            {['S', 'M', 'T', 'W', 'T', 'F', 'S'].map((d) => (
              <div key={d} className="font-bold text-gray-500">{d}</div>
            ))}
            {Array.from({ length: new Date(currentYear, today.getMonth(), 1).getDay() }).map((_, i) => (
              <div key={`pad-${i}`} />
            ))}
            {dayArray.map((day) => (
              <div
                key={day}
                className={`w-3 h-3 text-[9px] font-semibold flex items-center justify-center rounded-sm
                  ${day === currentDay ? 'bg-green-200 text-black shadow-inner' : 'text-gray-700'}
                `}
              >
                {day}
              </div>
            ))}
          </div>
        </div>
        <div className="absolute -top-12 right-4 w-16 h-4 bg-white bg-[url('https://www.transparenttextures.com/patterns/linen.png')] bg-repeat rounded-sm rotate-[3deg] shadow opacity-70"></div>
      </header>
      <div
      // Background
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
        <th className="p-3 text-left align-middle">
          <span className="px-1 bg-purple-200 rounded-sm">Habit</span>
        </th>
          {daysOfWeek.map((day, j) => (
            <th key={j} className="p-3 text-sm">{day}</th>
          ))}
        <th className="p-3 text-right align-middle">
          <span className="px-1 bg-purple-200 rounded-sm">Streak</span>
        </th>
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
            {daysOfWeek.map((_, j) => {
              const isFuture = j > getTodayIndex();

              return (
                <td key={j} className="p-2 text-center">
                  <button
                    onClick={() => !isFuture && toggleCheck(i, j)}
                    disabled={isFuture}
                    className={`relative w-8 h-8 rounded-sm border-2 overflow-hidden transition ${
                      habitChecks[i][j]
                        ? 'border-accent'
                        : 'bg-white '
                    } ${isFuture ? 'opacity-40 cursor-not-allowed' : ''}`}
                  >
                    {habitChecks[i][j] && (
                      <video
                        ref={(el) => {
                          if (el) el.playbackRate = 3.5;
                        }}
                        src="/scribble-fast.mp4"
                        autoPlay
                        muted
                        playsInline
                        loop={false}
                        className="absolute inset-0 w-full h-full object-cover"
                      />
                    )}
                  </button>
                </td>
              );
            })}
            <td className="p-2 text-center font-semibold">
              {calculateStreak(habitChecks[i])}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
    
  </div>

  {/* Font previews
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

</div> */}
</div>

  );
}
