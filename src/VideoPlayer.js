import { useContext, useEffect, useRef } from "react";
import { VideoContext } from "./App";
import { Comments } from "./Comments";
import { useVideo } from "./useVideo";

function VideoPlayer() {
  const videoRef = useRef();

  const {
    currentVideo: { src, title },
  } = useContext(VideoContext);

  const {
    isPlaying,
    time,
    duration,
    volume,
    isMuted,
    togglePlayback,
    updateTime,
    toggleMute,
    updateVolume,
  } = useVideo(videoRef);

  useEffect(() => {
    videoRef.current.load();
  }, [src]);

  return (
    <div>
      <video ref={videoRef} width={300} height={200} controls={false}>
        <source src={src}></source>
      </video>
      <div>
        <button onClick={togglePlayback}>{isPlaying ? "Pause" : "Play"}</button>
        <p>{formatTime(time) + " / " + formatTime(duration)}</p>
        <input
          type="range"
          min={0}
          max={duration}
          value={time}
          step={1}
          onChange={(event) => updateTime(event.target.value)}
        />
        <br />
        <button onClick={toggleMute}>{isMuted ? "Unmute" : "Mute"}</button>
        <p>{parseInt(volume * 100)}</p>
        <input
          type="range"
          min={0}
          max={1}
          value={volume}
          step={0.01}
          onChange={(event) => updateVolume(event.target.value)}
        />
      </div>
      <h3>{title}</h3>
      <Comments></Comments>
    </div>
  );
}

function formatTime(value) {
  const seconds = parseInt(value / 1000);
  const minutes = parseInt(value / 1000 / 60);
  const addZero = (value) => (value < 10 ? "0" + value : value);
  return addZero(minutes) + ":" + addZero(seconds);
}

export default VideoPlayer;
