import { useEffect, useState } from "react";
import { useAuth } from "../context/AuthContext";
import {
  addUserStar,
  addAnonymousStar,
  listenToAllStars,
} from "../services/starService";
import StarBornTransition from "../components/StarBornTransition";
import { SelectStar } from "../components/SelectStar";
import { AddDream } from "../components/AddDream";
import { StarMap } from "../components/starMap";

const GLOW = {
  1: "rgba(255,255,255,0.15)",
  2: "rgba(255,255,255,0.35)",
  3: "rgba(255,255,255,0.55)",
  4: "rgba(255,255,255,0.75)",
  5: "rgba(255,255,255,1.0)",
};

export default function UniversePage() {
  //this line will tell us if we have an existing user logged in or not
  const { user } = useAuth();
  const [showForm, setShowForm] = useState(false);
  const [save, setSave] = useState(false);
  // save to which database: user or anon ^
  const [showTransition, setShowTransition] = useState(false);
  const [stars, setStars] = useState([]);
  const [selected, setSelected] = useState(null);

  // this is for all stars:
  useEffect(() => {
    const unsub = listenToAllStars((allStars) => {
      setStars(allStars);
    });
    return () => unsub();
  }, []);

  return (
    <div className="w-full h-full bg-black flex items-center justify-center text-white">
      <StarMap onStarSelect={setSelected} />
      {selected && <SelectStar selected={selected} setSelected={setSelected}/>}

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
        <AddDream
          onClose={() => setShowForm(false)}
          onSuccess={() => {
            setShowForm(false);
            setShowTransition(true);
          }}
        />
      )}
      {showTransition && (
        <StarBornTransition onComplete={() => setShowTransition(false)} />
      )}
    </div>
  );
}
