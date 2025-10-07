import React from 'react';

export default function Hover() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 to-slate-800 flex items-center justify-center p-8">
      <div className="max-w-4xl w-full space-y-12">
        <h1 className="text-4xl font-bold text-white text-center mb-16">
          Hover Over the Text
        </h1>

        {/* Example 1: Simple text slide */}
        <div className="flex justify-center">
          <div className="relative  overflow-hidden cursor-pointer">
            <div className="group transition-transform duration-500 ease-out ">
              <div className="flex items-center justify-center text-3xl font-bold text-white group-hover:-translate-y-20">
                Hover Me
              </div>
              <div className="hidden group-hover:block items-center justify-center text-3xl group-hover:-translate-y-5 font-bold text-emerald-400">
                Welcome!
              </div>
            </div>
          </div>
        </div>

        {/* Example 2: Button with slide effect */}
        <div className="flex justify-center">
          <button className="relative h-14 w-48 overflow-hidden bg-blue-600 rounded-lg shadow-lg">
            <div className="transition-transform duration-300 ease-out hover:-translate-y-full">
              <div className="h-14 flex items-center justify-center text-lg font-semibold text-white">
                Click Here
              </div>
              <div className="h-14 flex items-center justify-center text-lg font-semibold text-white">
                Let's Go! →
              </div>
            </div>
          </button>
        </div>

        {/* Example 3: Card with slide effect */}
        <div className="flex justify-center">
          <div className="relative h-32 w-64 overflow-hidden bg-gradient-to-r from-purple-600 to-pink-600 rounded-xl shadow-xl cursor-pointer">
            <div className="transition-transform duration-500 ease-out hover:-translate-y-full">
              <div className="h-32 flex flex-col items-center justify-center text-white p-4">
                <p className="text-xl font-bold">Explore More</p>
                <p className="text-sm opacity-80">Hover to reveal</p>
              </div>
              <div className="h-32 flex flex-col items-center justify-center text-white p-4">
                <p className="text-xl font-bold">🚀 Amazing!</p>
                <p className="text-sm">Click to continue</p>
              </div>
            </div>
          </div>
        </div>

        {/* Example 4: Multiple lines sliding independently */}
        <div className="flex flex-col items-center gap-4">
          {['First Line', 'Second Line', 'Third Line'].map((text, idx) => (
            <div key={idx} className="relative h-12 w-64 overflow-hidden bg-slate-700 rounded-lg cursor-pointer">
              <div className="transition-transform duration-400 ease-out hover:-translate-y-full" style={{ transitionDelay: `${idx * 50}ms` }}>
                <div className="h-12 flex items-center justify-center text-white font-medium">
                  {text}
                </div>
                <div className="h-12 flex items-center justify-center text-yellow-400 font-medium">
                  ✨ {text} Hovered!
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}