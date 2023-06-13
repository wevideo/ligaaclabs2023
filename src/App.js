import "./App.css";
import CustomHeader from "./CustomHeader";
import CustomFooter from "./CustomFooter";
import Playlist from "./Playlist";
import videos from "./videos.json";
import { createContext, useState } from "react";

export const VideoContext = createContext(null);

function App() {
  const [currentVideo, setCurrentVideo] = useState(null);

  return (
    <VideoContext.Provider value={{ videos, currentVideo, setCurrentVideo }}>
      <div className="App">
        <CustomHeader title={"LigaAC Player"}></CustomHeader>
        <h1>
          This week's special: <a href="/starwars">Star Wars: all episodes</a>
        </h1>
        <main style={{ display: "flex", justifyContent: "space-between" }}>
          <Playlist />
        </main>
        <CustomFooter />
      </div>
    </VideoContext.Provider>
  );
}

export default App;
