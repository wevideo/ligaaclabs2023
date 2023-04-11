function VideoPlayer(props) {
  return (
    <div>
      <video width={300} height={200} controls>
        <source src="movie.mp4"></source>
      </video>
      <h3>{props.title}</h3>
    </div>
  );
}

export default VideoPlayer;
