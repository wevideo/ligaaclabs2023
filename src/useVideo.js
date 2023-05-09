import { useEffect, useState } from "react";

export function useVideo(videoRef) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [duration, setDuration] = useState(0);
  const [time, setTime] = useState(0);
  const [isMuted, setIsMuted] = useState(false);
  const [volume, setVolume] = useState(1);

  useEffect(() => {
    const video = videoRef.current;

    const onVideoPlayback = (event) => setIsPlaying(!event.target.paused);
    const onVideoDurationChange = (event) =>
      setDuration(parseInt(event.target.duration * 1000));
    const onVideoTimeUpdate = (event) =>
      setTime(parseInt(event.target.currentTime * 1000));
    const onVideoVolumeChange = (event) => {
      setIsMuted(event.target.muted);
      setVolume(event.target.volume);
    };

    video.addEventListener("play", onVideoPlayback);
    video.addEventListener("pause", onVideoPlayback);
    video.addEventListener("ended", onVideoPlayback);
    video.addEventListener("loadstart", onVideoPlayback);

    video.addEventListener("durationchange", onVideoDurationChange);

    video.addEventListener("timeupdate", onVideoTimeUpdate);

    video.addEventListener("volumechange", onVideoVolumeChange);

    return () => {
      video.removeEventListener("play", onVideoPlayback);
      video.removeEventListener("pause", onVideoPlayback);
      video.removeEventListener("ended", onVideoPlayback);
      video.removeEventListener("loadstart", onVideoPlayback);

      video.removeEventListener("durationchange", onVideoDurationChange);

      video.removeEventListener("timeupdate", onVideoTimeUpdate);

      video.removeEventListener("volumechange", onVideoVolumeChange);
    };
  });

  const togglePlayback = () => {
    if (!isPlaying) {
      videoRef.current.play();
    } else {
      videoRef.current.pause();
    }
  };

  const updateTime = (value) => {
    videoRef.current.currentTime = value / 1000;
  };

  const toggleMute = () => {
    videoRef.current.muted = !isMuted;
  };

  const updateVolume = (value) => {
    videoRef.current.volume = value;
  };

  return {
    isPlaying,
    time,
    duration,
    volume,
    isMuted,
    togglePlayback,
    updateTime,
    toggleMute,
    updateVolume,
  };
}
