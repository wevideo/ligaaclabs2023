import "./Playlist.css";
import { useContext, useRef, useState } from "react";
import { VideoContext } from "./App";
import { VideoThumbnail } from "./VideoThumbnail";
import VideoPlayer from "./VideoPlayer";
import { Modal } from "./Modal";

function Playlist() {
  const { videos, currentVideo, setCurrentVideo } = useContext(VideoContext);
  return (
    <div className="Playlist">
      <ul className="Videos">
        {videos.map((item) => (
          <VideoItem
            key={item.id}
            item={item}
            selected={currentVideo && currentVideo.id === item.id}
            setCurrentVideo={setCurrentVideo}
          />
        ))}
      </ul>
    </div>
  );
}

function VideoItem({ item, selected, setCurrentVideo }) {
  const ref = useRef();
  const [open, setOpen] = useState(false);
  const togglePlayback = () => ref.current.togglePlayback();

  const handleOpen = () => {
    togglePlayback();
    setCurrentVideo(item);
    setOpen(true);
  };

  return (
    <>
      <li
        onClick={handleOpen}
        className={`Video ${selected ? "Video-selected" : ""}`}
        onMouseEnter={togglePlayback}
        onMouseLeave={togglePlayback}
      >
        <VideoThumbnail source={item.src} ref={ref} />
      </li>

      <Modal onClose={() => setOpen(false)} open={open}>
        <VideoPlayer currentVideo={item} />
      </Modal>
    </>
  );
}

export default Playlist;
