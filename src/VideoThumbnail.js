import { useRef, forwardRef, useImperativeHandle } from "react";
import { useVideoLoop } from "./useVideoLoop";

export const VideoThumbnail = forwardRef(function VideoThumbnail(
  { source },
  ref
) {
  const videoRef = useRef();
  const { togglePlayback } = useVideoLoop(videoRef);

  useImperativeHandle(ref, () => {
    return {
      togglePlayback,
    };
  });

  return (
    <video
      ref={videoRef}
      width={240}
      height={360}
      controls={false}
      muted={true}
    >
      <source src={source}></source>
    </video>
  );
});
