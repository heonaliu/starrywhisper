import { useState, useEffect } from "react";
import { useAuth } from "../context/AuthContext";
import { updateUserStar } from "../services/starService";
import { ACHIEVEMENT_LABELS, LOCATIONS } from "../constants";

const PULSE = {
  1: { ring: "w-5 h-5",   duration: "4000ms", opacity: 0.2  },
  2: { ring: "w-7 h-7",   duration: "3000ms", opacity: 0.38 },
  3: { ring: "w-10 h-10", duration: "2200ms", opacity: 0.58 },
  4: { ring: "w-14 h-14", duration: "1400ms", opacity: 0.78 },
  5: { ring: "w-20 h-20", duration: "800ms",  opacity: 1.0  },
};

export function SelectStar({ selected, setSelected }) {
  const { user } = useAuth();
  const isOwner = user && user.uid === selected.uid;

  const [editing,setEditing]= useState(false);
  const [saving,setSaving]= useState(false);
  const [saved,setSaved]= useState(false);
  const [title,setTitle]= useState(selected.title||"");
  const [desc,setDesc] = useState(selected.desc||"");
  const [location,setLocation]= useState(selected.location||"North America");
  const [achievement,setAchievement] = useState(selected.achievement || 1);

  useEffect(() => {
    setTitle(selected.title || "");
    setDesc(selected.desc || "");
    setLocation(selected.location || "North America");
    setAchievement(selected.achievement || 1);
    setEditing(false);
    setSaved(false);
  }, [selected.star_id]);

  const pulse = PULSE[achievement] || PULSE[1];

  async function handleSave() {
    setSaving(true);
    try {
      await updateUserStar(user.uid, selected.star_id, {
        title,
        desc,
        location,
        achievement: Math.round(achievement),
      });

      selected.title = title;
      selected.desc = desc;
      selected.location= location;
      selected.achievement = Math.round(achievement);
      setSaved(true);
      setEditing(false);
      setTimeout(() => setSaved(false), 2500);
    } catch (err) {
      console.error(err);
    }
    setSaving(false);
  }

  const inputCls =
    "w-full bg-white/5 border border-white/10 rounded-xl px-3 py-2.5 text-white text-sm placeholder-white/20 focus:outline-none focus:border-white/25 transition-colors";

  return (
    <>
      <style>{`
        @keyframes pulseRing {
          0%   { transform: scale(1);   opacity: var(--op); }
          100% { transform: scale(2.6); opacity: 0; }
        }
        @keyframes pulseRing2 {
          0%   { transform: scale(1);   opacity: calc(var(--op) * 0.5); }
          100% { transform: scale(1.9); opacity: 0; }
        }
        .pr1 { animation: pulseRing  var(--dur) ease-out infinite; }
        .pr2 { animation: pulseRing2 var(--dur) ease-out infinite;
               animation-delay: calc(var(--dur) * 0.38); }

        input[type=range].ach-slider {
          -webkit-appearance: none; appearance: none;
          width: 100%; height: 2px;
          background: rgba(255,255,255,0.15);
          border-radius: 2px; outline: none; cursor: pointer;
        }
        input[type=range].ach-slider::-webkit-slider-thumb {
          -webkit-appearance: none;
          width: 16px; height: 16px; border-radius: 50%;
          background: white; cursor: pointer;
          box-shadow: 0 0 8px 3px rgba(255,255,255,0.4);
        }
        input[type=range].ach-slider::-moz-range-thumb {
          width: 16px; height: 16px; border-radius: 50%;
          background: white; border: none; cursor: pointer;
          box-shadow: 0 0 8px 3px rgba(255,255,255,0.4);
        }
        select.star-select option { background: #111118; }

        @keyframes slideIn {
          from { opacity: 0; transform: translateX(18px); }
          to   { opacity: 1; transform: translateX(0); }
        }
        .star-card { animation: slideIn 0.22s ease forwards; }
      `}</style>

      <div
        className="star-card fixed right-5 z-50 flex flex-col"
        style={{ top: "10%", bottom: "10%", width: 310 }}
      >
        <div className="bg-[#0c0c18] border border-white/8 rounded-2xl shadow-2xl flex flex-col h-full overflow-hidden">

          <div className="flex-1 overflow-y-auto pt-8 pb-4 flex flex-col gap-5" style={{ paddingLeft: 24, paddingRight: 24 }}>

            <div className="flex justify-center">
              <div className="relative flex items-center justify-center w-6 h-6">
                <div
                  className={`pr1 absolute rounded-full border ${pulse.ring}`}
                  style={{
                    borderColor: `rgba(255,255,255,${pulse.opacity})`,
                    "--op":  pulse.opacity,
                    "--dur": pulse.duration,
                  }}
                />

                <div
                  className={`pr2 absolute rounded-full border ${pulse.ring}`}
                  style={{
                    borderColor: `rgba(255,255,255,${pulse.opacity * 0.55})`,
                    "--op":  pulse.opacity,
                    "--dur": pulse.duration,
                  }}
                />
                
                <div
                  className="relative z-10 w-2 h-2 rounded-full bg-white"
                  style={{
                    boxShadow: `0 0 ${Math.round(achievement * 5)}px ${Math.round(achievement * 2)}px rgba(255,255,255,${pulse.opacity * 0.7})`,
                  }}
                />
              </div>
            </div>

            {editing ? (
              <input
                className={inputCls}
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder="Dream title"
                style={{ fontSize: 15, fontWeight: 600 }}
              />
            ) : (
              <div className="flex items-center gap-2">
                <div className="flex-1 bg-white/5 border border-white/8 rounded-xl px-4 py-3">
                  <p className="text-white font-semibold text-base tracking-wide leading-snug">
                    {title}
                  </p>
                </div>
                {/* pencil — only owner sees this */}
                {isOwner && (
                  <button
                    onClick={() => setEditing(true)}
                    className="shrink-0 w-8 h-8 flex items-center justify-center rounded-lg border border-white/10 text-white/30 hover:text-white/70 hover:border-white/30 transition-colors cursor-pointer"
                    title="Edit dream"
                  >
                    {/* pencil svg */}
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"/>
                      <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"/>
                    </svg>
                  </button>
                )}
              </div>
            )}

            <div className="flex justify-between text-xs text-white/20 -mt-2 px-1">
              <span>star #{selected.star_id}</span>
              <span>({selected.x?.toFixed(2)}, {selected.y?.toFixed(2)})</span>
            </div>

            {editing ? (
              <div>
                <p className="text-white/30 text-xs tracking-widest mb-2">LOCATION</p>
                <select
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                  className={`${inputCls} star-select`}
                >
                  {LOCATIONS.map((loc) => (
                    <option key={loc} value={loc}>{loc}</option>
                  ))}
                </select>
              </div>
            ) : (
              <p className="text-white/35 text-xs tracking-widest -mt-2 px-1">
                {location}
              </p>
            )}


            <div className="border-t border-white/6" />

            <div>
              <p className="text-white/30 text-xs tracking-widest mb-3">STORY</p>
              {editing ? (
                <textarea
                  rows={4}
                  className={inputCls}
                  value={desc}
                  onChange={(e) => setDesc(e.target.value)}
                  placeholder="What's the story behind this dream?"
                  style={{ resize: "none" }}
                />
              ) : desc ? (
                <p className="text-white/60 text-sm leading-relaxed">{desc}</p>
              ) : (
                <p className="text-white/20 text-sm italic">no story written for this star.</p>
              )}
            </div>

            {/* ── achievement slider ─────────────────────────── */}
            <div>
              <div className="flex items-center justify-between mb-3">
                <p className="text-white/30 text-xs tracking-widest">PROGRESS</p>
                <div className="flex items-center gap-1.5">
                  {/* star icon */}
                  <svg width="10" height="10" viewBox="0 0 24 24" fill="rgba(255,255,255,0.6)" className="shrink-0">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                  </svg>
                  <span className="text-white/60 text-xs font-medium">{achievement}</span>
                  <span className="text-white/25 text-xs">·</span>
                  <span className="text-white/40 text-xs">{ACHIEVEMENT_LABELS[achievement]}</span>
                </div>
              </div>

              {/* track + tick marks */}
              <div className="relative px-1">
                <input
                  type="range"
                  min="1" max="5" step="1"
                  value={achievement}
                  onChange={(e) => setAchievement(Number(e.target.value))}
                  disabled={!editing}
                  className="ach-slider"
                  style={{ opacity: editing ? 1 : 0.5, pointerEvents: editing ? 'auto' : 'none' }}
                />
                {/* tick marks */}
                <div className="flex justify-between mt-1.5 px-0.5">
                  {[1,2,3,4,5].map((n) => (
                    <span
                      key={n}
                      className="text-xs"
                      style={{ color: n <= achievement ? 'rgba(255,255,255,0.5)' : 'rgba(255,255,255,0.15)' }}
                    >
                      {n}
                    </span>
                  ))}
                </div>
              </div>
            </div>

          </div>{/* end scrollable body */}

          {/* ── footer actions ───────────────────────────────── */}
          <div className="px-6 pb-6 pt-2 flex flex-col gap-2 border-t border-white/6 mt-1">
            {editing && (
              <button
                onClick={handleSave}
                disabled={saving}
                className="w-full py-2.5 rounded-xl bg-white text-black text-sm font-medium cursor-pointer hover:bg-white/90 transition-colors"
              >
                {saving ? "saving..." : saved ? "saved ✦" : "save changes"}
              </button>
            )}
            {editing && (
              <button
                onClick={() => {
                  // reset back to original values on cancel
                  setTitle(selected.title || "");
                  setDesc(selected.desc || "");
                  setLocation(selected.location || "North America");
                  setAchievement(selected.achievement || 1);
                  setEditing(false);
                }}
                className="w-full py-2.5 rounded-xl border border-white/10 text-white/35 text-sm cursor-pointer hover:border-white/25 hover:text-white/55 transition-colors"
              >
                cancel
              </button>
            )}
            {!editing && (
              <button
                onClick={() => setSelected(null)}
                className="w-full py-2.5 rounded-xl border border-white/10 text-white/35 text-sm cursor-pointer hover:border-white/25 hover:text-white/55 transition-colors"
              >
                close
              </button>
            )}
            {saved && !editing && (
              <p className="text-center text-xs text-white/30 tracking-wider">
                ✦ star updated
              </p>
            )}
          </div>

        </div>
      </div>
    </>
  );
}