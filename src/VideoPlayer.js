import {useContext, useEffect, useRef, useState} from "react";
import {VideoContext} from "./App";
import {Comments} from "./Comments";

function VideoPlayer() {
    const videoRef = useRef();
    const {currentVideo: {src, title}} = useContext(VideoContext);
    const [isPlaying, setIsPlaying] = useState(false);
    const [duration, setDuration] = useState(0);
    const [time, setTime] = useState(0);
    const [isMuted, setIsMuted] = useState(false);
    const [volume, setVolume] = useState(1);

    useEffect(() => {
        videoRef.current.load();
    }, [src]);

    useEffect(()=> {
        const video = videoRef.current;

        const onVideoPlayback = (event)=> setIsPlaying(!event.target.paused);
        const onVideoDurationChange = (event) => setDuration(parseInt(event.target.duration * 1000));
        const onVideoTimeUpdate = (event) => setTime(parseInt(event.target.currentTime * 1000));
        const onVideoVolumeChange = (event) => {
            setIsMuted(event.target.muted);
            setVolume(event.target.volume);
        }

        video.addEventListener("play", onVideoPlayback);
        video.addEventListener("pause", onVideoPlayback);
        video.addEventListener("ended", onVideoPlayback);        
        video.addEventListener("loadstart", onVideoPlayback);

        video.addEventListener("durationchange", onVideoDurationChange);

        video.addEventListener("timeupdate", onVideoTimeUpdate);

        video.addEventListener("volumechange", onVideoVolumeChange);

        return ()=> {
            video.removeEventListener("play", onVideoPlayback);
            video.removeEventListener("pause", onVideoPlayback);
            video.removeEventListener("ended", onVideoPlayback);
            video.removeEventListener("loadstart", onVideoPlayback);

            video.removeEventListener("durationchange", onVideoDurationChange);

            video.removeEventListener("timeupdate", onVideoTimeUpdate);

            video.removeEventListener("volumechange", onVideoVolumeChange);
        }
    })

    const onPlaybackClick = ()=> {
        if (!isPlaying) {
            videoRef.current.play();
        } else {
            videoRef.current.pause();
        }
    }

    const onPlaybackSliderChange = (event)=> {
        videoRef.current.currentTime = event.target.value / 1000;
    }

    const onMuteClick = ()=> {
        videoRef.current.muted = !isMuted;
    }

    const onVolumeSliderChange = (event)=> {
        videoRef.current.volume = event.target.value;
    }

    return (
        <div>
            <video ref={videoRef} width={300} height={200} controls={false}>
                <source src={src}></source>
            </video>
            <div>
                <button onClick={onPlaybackClick}>{isPlaying ? "Pause" : "Play"}</button>
                <p>{formatTime(time) + " / " + formatTime(duration)}</p>
                <input type="range" min={0} max={duration} value={time} step={1} onChange={onPlaybackSliderChange}/>
                <br/><button onClick={onMuteClick}>{isMuted ? "Unmute" : "Mute"}</button>
                <p>{parseInt(volume * 100)}</p>
                <input type="range" min={0} max={1} value={volume} step={0.01} onChange={onVolumeSliderChange}/>
            </div>
            <h3>{title}</h3>
            <Comments></Comments>
        </div>
    );
}

function formatTime(value) {
    const seconds = parseInt(value / 1000);
    const minutes = parseInt(value / 1000 / 60);
    const addZero = (value) => value < 10 ? "0" + value : value;
    return addZero(minutes) + ":" + addZero(seconds);
}

export default VideoPlayer;
