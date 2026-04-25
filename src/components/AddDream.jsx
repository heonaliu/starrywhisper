import { useState } from "react";
import { useAuth } from "../context/AuthContext";
import { addUserStar, addAnonymousStar } from "../services/starService";

export function AddDream( {onClose, onSuccess}) {
      const { user } = useAuth() 
      const [title, setTitle] = useState("");
      const [desc, setDesc] = useState("");
      const [save, setSave] = useState(false)

      async function handleCast() {
          if (!title.trim() && !desc.trim()) return; // basically if there's nothing in the title return nothing
      
          setSave(true);
          try {
            if (user) {
              //basically if user exists we use the addUserStar else we use addAnonymousStar
              if (!title.trim()) {
                setTitle("");
              } else if (!desc.trim()) {
                setDesc("");
              }
              await addUserStar(user.uid, {
                title,
                desc,
                achievement: 1,
                location: "North America",
              });
            } else {
              await addAnonymousStar({
                title,
                desc,
                achievement: 1,
                location: "North America",
              });
            }
            onSuccess()
          } catch (err) {
            console.log(err);
          }
          setSave(false);
        }
      
    return (
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

            <input
              type="text"
              placeholder="What's your story?"
              value={desc}
              onChange={(e) => setDesc(e.target.value)}
              className="w-full bg-white/5 border border-white/10 rounded-lg px-3 py-2.5 text-white text-lg placeholder-white/20 focus:outline-none mb-4"
            />

            <div className="flex gap-3">
              {" "}
              <button
                onClick={onClose}
                className="flex-1 py-2.5 rounded-xl text-white/40 text-sm border border-white/10 cursor-pointer"
              >
                cancel
              </button>
              <button
                onClick={handleCast}
                disabled={save}
                className="flex-1 py-2.5 rounded-xl bg-white text-black text-sm cursor-pointer"
              >
                {save ? "..." : "cast"}
              </button>
            </div>
          </div>
        </div>
    )




}