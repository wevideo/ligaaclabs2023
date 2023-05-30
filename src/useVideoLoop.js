import { useEffect } from "react";
import { useVideo } from "./useVideo";

export function useVideoLoop(videoRef) {
    const { time, togglePlayback } = useVideo(videoRef);

    useEffect(() => {
        if (time > 3000) {
            videoRef.current.currentTime = 0;
        }
    }, [time, videoRef]);

    return { togglePlayback };
}