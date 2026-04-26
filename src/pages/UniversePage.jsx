import { useEffect, useState } from "react";
import { useAuth } from "../context/AuthContext";
import {
  addUserStar,
  addAnonymousStar,
  listenToAllStars,
  listenToUserStars
} from "../services/starService";
import StarBornTransition from "../components/StarBornTransition";
import { SelectStar } from "../components/SelectStar";
import { AddDream } from "../components/AddDream";
import { StarMap } from "../components/starMap";
import { FollowCursor } from "../components/FollowCursor";
import BottomMenu from "../components/ui/bottom-menu";
import { useNavigate } from "react-router-dom";

const GLOW = {
  1: "rgba(255,255,255,0.15)",
  2: "rgba(255,255,255,0.35)",
  3: "rgba(255,255,255,0.55)",
  4: "rgba(255,255,255,0.75)",
  5: "rgba(255,255,255,1.0)",
};

export default function UniversePage() {
  const { user } = useAuth();
  const navigate = useNavigate();

  const [showForm, setShowForm] = useState(false);
  const [showTransition, setShowTransition] = useState(false);
  const [selected, setSelected] = useState(null);
  const [showUserStars, setShowUserStars] = useState(false);
  const [stars, setStars] = useState([]);

  useEffect(() => {
    let unsub;

    if (showUserStars && user) {
      unsub = listenToUserStars(user.uid, setStars);
    } else {
      unsub = listenToAllStars(setStars);
    }

    return () => unsub && unsub();
  }, [showUserStars, user]);

  const handleAddClick = () => setShowForm(true);
  const handleHomeClick = () => {
    setShowUserStars(false);
    navigate("/");
  };
  const handleMyStarsClick = () => {
    if (user) setShowUserStars(true);
  };
  const handleAllStarClick = () => navigate("/allStars")

  return (
    <div className="w-full h-full bg-black text-white relative">
      <FollowCursor />

      <div className="absolute inset-0">
        <StarMap stars={stars} onStarSelect={setSelected} />
      </div>

      <div className="absolute bottom-0 left-0 right-0 z-50 flex justify-center pointer-events-none">
        <div className="pointer-events-auto">
          <BottomMenu
            onAddClick={handleAddClick}
          />
        </div>
      </div>

      {selected && <SelectStar selected={selected} setSelected={setSelected} />}

      <p className="absolute top-6 left-1/2 -translate-x-1/2 text-white/30 text-xs">
        {user ? `signed in as ${user.displayName}` : "anonymous"}
      </p>

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


