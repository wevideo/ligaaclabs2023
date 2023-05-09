import { useRef, forwardRef, useImperativeHandle } from "react";
import { useVideo } from "./useVideo";

export const VideoThumnail = forwardRef(function VideoThumnail(
  { source },
  ref
) {
  const videoRef = useRef();

  const { togglePlayback } = useVideo(videoRef);

  useImperativeHandle(ref, () => {
    return {
      togglePlayback,
    };
  });

  return (
    <video
      ref={videoRef}
      width={240}
      height={135}
      controls={false}
      muted={true}
    >
      <source src={source}></source>
    </video>
  );
});
