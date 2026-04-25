import { useRef, useState, useEffect } from "react";
import {
    INITIAL_VALUE,
    ReactSVGPanZoom,
    TOOL_AUTO,
    TOOL_PAN,
} from "react-svg-pan-zoom";
import { listenToAllStars } from "../services/starService";

export function StarMap() {
    const Viewer = useRef(null);
    const [tool, setTool] = useState(TOOL_AUTO);
    const [value, setValue] = useState(INITIAL_VALUE);
    const [stars, setStars] = useState([]);
    const [selected, setSelected] = useState(null);


    // Track window size for responsive canvas
    const [size, setSize] = useState({
        width: window.innerWidth,
        height: window.innerHeight,
    });

    const aspect = size.width / size.height;
    const universeHeight = 1500;
    const universeWidth = universeHeight * aspect;

    useEffect(() => {
        const handleResize = () =>
            setSize({ width: window.innerWidth, height: window.innerHeight });

        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    // Load stars
    useEffect(() => {
        const unsub = listenToAllStars((allStars) => setStars(allStars));
        return () => unsub();
    }, []);

    // Fit to viewer on mount + resize
    useEffect(() => {
        if (Viewer.current) Viewer.current.fitToViewer();
    }, [size]);

    const GLOW = {
        1: "rgba(255,255,255,0.15)",
        2: "rgba(255,255,255,0.35)",
        3: "rgba(255,255,255,0.55)",
        4: "rgba(255,255,255,0.75)",
        5: "rgba(255,255,255,1.0)",
    };


    return (
        <div className="w-full h-full overflow-hidden">
        <ReactSVGPanZoom
            ref={Viewer}
            width={size.width}
            height={size.height}
            tool={tool}
            onChangeTool={setTool}
            value={value}
            onChangeValue={(next) => setValue(clampPan(next))}
            toolbarProps={{ position: "none" }}
            miniatureProps={{ position: "none" }}
            detectDoubleClick={true}
            scaleFactorMin={0.46}
            background="#030212"
            SVGBackground="#060319"
        >
            <svg width={universeWidth} height={universeHeight}>
            {stars.map((star) => {
                const size = (star.achievement || 1) * 2 + 2;

                return (
                <circle
                    key={star.star_id}
                    cx={star.x * universeWidth}
                    cy={star.y * universeHeight}
                    r={size}
                    fill="white"
                    opacity={(star.achievement || 1)} //* 0.18 + 0.1}
                    stroke={GLOW[star.achievement || 1]}
                    strokeWidth={size * 0.6}
                    onClick={() => {
                        console.log("Star Clicked")
                        setSelected(star);
                    }}
                    style={{ cursor: "default" }}
                />
                );
            })}
            </svg>
        </ReactSVGPanZoom>
        </div>
    );
    }

    function clampPan(nextValue) {
    const maxX = 20;   // max value of how far user can pan away from the canvas
    const maxY = 20;

    return {
        ...nextValue,
        e: Math.min(Math.max(nextValue.e, -maxX), maxX),
        f: Math.min(Math.max(nextValue.f, -maxY), maxY),
    };
}
