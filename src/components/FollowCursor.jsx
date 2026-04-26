import { useEffect, useRef } from "react";
import MouseFollower from "mouse-follower";
import gsap from "gsap";
import queenie from "../assets/queenie.png";

MouseFollower.registerGSAP(gsap);

export function FollowCursor() {
  const cursorRef = useRef(null);

  useEffect(() => {
    cursorRef.current = new MouseFollower({
      container: document.body,
      speed: 0.45,
      ease: "expo.out",
      skewing: 0,
      visible: true,
      initialPos: (0,0)
    });

    cursorRef.current.setImg(queenie);

    return () => cursorRef.current?.destroy();
  }, []);

  return null;
}