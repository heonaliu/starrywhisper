import { Link, useNavigate } from "react-router-dom";
import { signInWithGoogle } from "../firebase";
import { useAuth } from "../context/AuthContext";
import { FollowCursor } from "../components/FollowCursor";
import "/src/App.css";

export default function LandingPage() {
  const { user } = useAuth();
  const navigate = useNavigate();

  async function handleGoogleSignIn() {
    try {
      await signInWithGoogle();
      navigate("/universe");
    } catch (err) {
      console.error("Sign-in failed:", err);
    }
  }

  function handleContinueAnonymously() {
    navigate("/universe");
  }

  return (
    <div className="relative w-full h-full bg-black">
      <img src="/src/assets/land-stars.png" alt=""
      className="absolute inset-0 w-full h-full object-cover object-center z-0" />

      <img src="/src/assets/land-floor.png" alt=""
      className = "absolute bottom-0 left-0 right-0 w-full h-full object-cover object-bottom z-[1]" 
      style = {{ objectFit: "cover" }}/>
      <FollowCursor/>
      <div className="absolute inset-0">
      </div>

      <div className = "absolute inset-0 bg-black/30 z-[2]"/>
      <div className="relative z-[3] flex flex-col items-center justify-center h-full gap-4 text-white">
        
        <img src="/src/assets/queenie-dust.png" alt="" style = {{width: "128px", height: "200px"}} className = "max-w-[10vw] max-h-[20vh] object-contain" />
        
        <h1 style = {{ fontFamily: "'Mogra', cursive"}} className="text-5xl font-light tracking-widest">StarryWhisper</h1>
        
        <p style = {{fontFamily: "'Courgette', cursive"}} className="text-white/40 text-sm tracking-widest">
          cast your dream in amidst a sky full of aspirations and ambitions
        </p>

        <div className="flex flex-col items-center gap-3 mt-6">
          <button
            onClick={handleGoogleSignIn}
            className="flex items-center gap-3 px-6 py-3 text-white text-sm font-medium rounded-full hover:bg-white/90 hover:text-black transition-all duration-200 cursor-pointer"

            // className="text-xs tracking-widest hover:text-white/60 transition-colors duration-200 cursor-pointer"
            style = {{
              paddingLeft: 24, paddingRight: 24, paddingTop: 10, paddingBottom: 10,
              borderRadius: 10, 
              border: `2px solid ${"white" || "black"}`,
              // color: isHovered ? "white" : "black"  
            }}
          >
            {/* copied and pasted svg for google temporarily - we should find a better logo that is just white (use lucid-react icons or smth) */}
            <svg width="18" height="18" viewBox="0 0 18 18">
              <path
                fill="#abbddb"
                d="M17.64 9.2c0-.637-.057-1.251-.164-1.84H9v3.481h4.844c-.209 1.125-.843 2.078-1.796 2.717v2.258h2.908c1.702-1.567 2.684-3.874 2.684-6.615z"
              />
              <path
                fill="#96b69e"
                d="M9 18c2.43 0 4.467-.806 5.956-2.18l-2.908-2.259c-.806.54-1.837.86-3.048.86-2.344 0-4.328-1.584-5.036-3.711H.957v2.332A8.997 8.997 0 0 0 9 18z"
              />
              <path
                fill="#ddcd9f"
                d="M3.964 10.71A5.41 5.41 0 0 1 3.682 9c0-.593.102-1.17.282-1.71V4.958H.957A8.996 8.996 0 0 0 0 9c0 1.452.348 2.827.957 4.042l3.007-2.332z"
              />
              <path
                fill="#cf9a95"
                d="M9 3.58c1.321 0 2.508.454 3.44 1.345l2.582-2.58C13.463.891 11.426 0 9 0A8.997 8.997 0 0 0 .957 4.958L3.964 7.29C4.672 5.163 6.656 3.58 9 3.58z"
              />
            </svg>
            <p style = {{fontFamily: "'Nunito', cursive"}}>Continue with Google</p>
          </button>

          <button
            onClick={handleContinueAnonymously}
            className="text-xs tracking-widest hover:text-white/60 transition-colors duration-200 cursor-pointer"
          >
            <p style = {{fontFamily: "'Nunito', cursive"}}>Enter the Universe</p>
          </button>
        </div>
      </div>
    </div>
  );
}
