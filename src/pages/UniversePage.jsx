import { useState } from "react";

export default function UniversePage() {
  const [showForm, setShowForm] = useState(false);

  return (
    <div className="w-full h-full bg-black flex items-center justify-center text-white">
      <button
        onClick={() => setShowForm(true)}
        className="absolute top-8 left-8 w-14 h-14 rounded-full bg-white text-black text-2xl flex items-center justify-center cursor-pointer"
      >
        +
      </button>
      {showForm && (
        <div className="absolute bg-black/70 flex items-center justify-center">
          <div className="bg-[#0a0a0f] border border-white/10 rounded-2xl p-6 w-80">

            <p className="text-white rounded-xl text-black text-lg">Cast a dream</p>

            <input
              type="text"
              placeholder="What's your dream?"
              className="w-full bg-white/5 border border-white/10 rounded-lg px-3 py-2.5 text-white text-lg placeholder-white/20 focus:outline-none mb-4"
            />

            <div className="flex gap-3">
              <button
                onClick={() => setShowForm(false)}
                className="flex-1 py-2.5 rounded-xl text-white/40 text-sm border border-white/10 cursor-pointer"
              >
                cancel
              </button>
              <button
                onClick={() => setShowForm(false)}
                className="flex-1 py-2.5 rounded-xl bg-white text-black text-sm cursor-pointer"
              >
                cast
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
