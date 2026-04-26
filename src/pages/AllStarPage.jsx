import { useEffect, useState } from "react";
import { useAuth } from "../context/AuthContext";
import {
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

export default function AllStarsPage() {
  const { user } = useAuth();
  const navigate = useNavigate();

  const [showForm, setShowForm] = useState(false);
  const [showTransition, setShowTransition] = useState(false);
  const [selected, setSelected] = useState(null);
  const [showAllStars, setShowAllStars] = useState(false);
  const [stars, setStars] = useState([]);

  useEffect(() => {
    if (!user) {
      navigate("/");
      return;
    }
    const unsub = listenToUserStars(user.uid, (userStars) => {
      setStars(userStars);
    });
    return () => unsub();
  }, [user]);

  const handleAddClick = () => {
    setSelected(null)
    setShowForm(true)};


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

       <p className="absolute top-6 left-1/2 -translate-x-1/2 text-white/30 text-xs pointer-events-none">
        {user?.displayName} · {stars.length} star{stars.length !== 1 ? "s" : ""}
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
