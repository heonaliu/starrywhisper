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
      <p className="tracking-widest text-white/40">universe coming soon</p>
      <button>++</button>
    </div>
  );
}
