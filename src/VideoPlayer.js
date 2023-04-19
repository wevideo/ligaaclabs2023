import {useContext, useEffect, useRef} from "react";
import {VideoContext} from "./App";
import {Comments} from "./Comments";

function VideoPlayer() {
    const videoRef = useRef();
    const {currentVideo: {src, title}} = useContext(VideoContext);

    useEffect(() => {
        videoRef.current.load();
    }, [src]);

    return (
        <div>
            <video ref={videoRef} width={300} height={200} controls>
                <source src={src}></source>
            </video>
            <h3>{title}</h3>
            <Comments></Comments>
        </div>
    );
}

export default VideoPlayer;
