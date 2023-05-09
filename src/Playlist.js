import "./Playlist.css";
import { useContext, useRef } from "react";
import { VideoContext } from "./App";
import { VideoThumnail } from "./VideoThumnail";

function Playlist() {
  const { videos, setCurrentVideo } = useContext(VideoContext);
  return (
    <div className="Playlist">
      <h3>My playlist:</h3>
      <ul className="Videos">
        {videos.map((item) => (
          <VideoItem
            key={item.id}
            item={item}
            setCurrentVideo={setCurrentVideo}
          />
        ))}
      </ul>
    </div>
  );
}

function VideoItem({ item, setCurrentVideo }) {
  const ref = useRef();

  const togglePlayback = () => ref.current.togglePlayback();

  return (
    <li
      onClick={() => setCurrentVideo(item)}
      className="Video"
      onMouseEnter={togglePlayback}
      onMouseLeave={togglePlayback}
    >
      <VideoThumnail source={item.src} ref={ref} />
    </li>
  );
}

export default Playlist;
