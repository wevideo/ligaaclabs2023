import "./VideoPlayer.css";
import { useEffect, useRef } from "react";
import { Comments } from "./Comments";
import { useVideo } from "./useVideo";
import { Button } from "./uikit/Button";

function VideoPlayer({ currentVideo }) {
  const videoRef = useRef();

  const { src, title } = currentVideo ? currentVideo : { src: null, title: null, id: -1 };

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
    <div className="VideoPlayer">
      <video ref={videoRef} width={600} height={338} controls={false} autoPlay={true}>
        <source src={src}></source>
      </video>
      <div>
        <Button variant="contained" color="success" onClick={togglePlayback}>Button
          {isPlaying ? "Pause" : "Play"}
        </Button>
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
        <Button variant="contained" onClick={toggleMute}>
          {isMuted ? "Unmute" : "Mute"}
        </Button>
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
