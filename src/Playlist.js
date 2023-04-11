import "./Playlist.css";

function Playlist() {
  const videos = [
    { title: "Vacation", key: 123 },
    { title: "AC Labs", key: 495 },
    { title: "Liviu Dragnea gateste", key: 4992 },
  ];

  const clickHandler = (title) => {
    console.log("I just clicked a video:", title);
  };

  return (
    <div className="Playlist">
      <h3>My playlist:</h3>
      <ul className="Videos">
        {videos.map((item) => (
          <li
            onClick={() => clickHandler(item.title)}
            className="Video"
            key={item.key}
          >
            {item.title}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Playlist;
