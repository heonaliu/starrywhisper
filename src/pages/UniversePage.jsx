import { useState } from "react";
import { useAuth } from "../context/AuthContext";
import { addUserStar, addAnonymousStar } from "../services/starService";

export default function UniversePage() {
  //this line will tell us if we have an existing user logged in or not
  const { user } = useAuth();
  const [showForm, setShowForm] = useState(false);
  const [title, setTitle] = useState("");
  const [save, setSave] = useState(false);
  // save to which database: user or anon ^

  async function handleCast() {
    if (!title.trim()) return; // basically if there's nothing in the title return nothing

    setSave(true);
    try {
      if (user) {
        //basically if user exists we use the addUserStar else we use addAnonymousStar
        await addUserStar(user.uid, {
          title,
          desc: "",
          achievement: 1,
          location: "North America",
        });
      } else {
        await addAnonymousStar({
          title,
          desc: "",
          achievement: 1,
          location: "North America",
        });
      }
      setTitle("");
      setShowForm(false);
    } catch (err) {
      console.log(err);
    }
    setSave(false);
  }

  return (
    <div className="w-full h-full bg-black flex items-center justify-center text-white">
      <p className="absolute top-6 center-6 text-white/30 text-xs">
        {user ? `signed in as ${user.displayName}` : "anonymous"}
      </p>
      <button
        onClick={() => setShowForm(true)}
        className="absolute top-8 left-8 w-10 h-10 rounded-full bg-white text-black text-2xl flex items-center justify-center cursor-pointer"
      >
        +
      </button>
      {showForm && (
        <div className="absolute bg-black/70 flex items-center justify-center">
          <div className="bg-[#0a0a0f] border border-white/10 rounded-2xl p-6 w-80">
            <p className="text-white rounded-xl text-black text-lg">
              Cast a dream
            </p>
            <p className="text-white/30 text-xs mb-4">
              {user ? "saving to your account" : "saving anonymously"}
            </p>
            <input
              type="text"
              placeholder="What's your dream?"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
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
                onClick={handleCast}
                disabled={save}
                className="flex-1 py-2.5 rounded-xl bg-white text-black text-sm cursor-pointer"
              >
                {save ? "..." : cast}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
