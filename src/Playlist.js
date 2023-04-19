import "./Playlist.css";
import {useContext} from "react";
import {VideoContext} from "./App";

function Playlist() {
    const {videos, setCurrentVideo} = useContext(VideoContext);
    return (
        <div className="Playlist">
            <h3>My playlist:</h3>
            <ul className="Videos">
                {videos.map((item) => (
                    <li
                        onClick={() => setCurrentVideo(item)}
                        className="Video"
                        key={item.id}
                    >
                        {item.title}
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default Playlist;
