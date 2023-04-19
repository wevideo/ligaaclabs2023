import "./App.css";
import CustomHeader from "./CustomHeader";
import CustomFooter from "./CustomFooter";
import Playlist from "./Playlist";
import VideoPlayer from "./VideoPlayer";

import videos from "./videos.json";
import {createContext, useState} from "react";

export const VideoContext = createContext(null);

function App() {
    const [currentVideo, setCurrentVideo] = useState(videos[0]);

    return (
        <VideoContext.Provider value={{videos, currentVideo, setCurrentVideo}}>
            <div className="App">
                <CustomHeader title={"Liga Ac Player"}></CustomHeader>
                <main style={{display: "flex", justifyContent: "space-between"}}>
                    <VideoPlayer/>
                    <Playlist/>
                </main>
                <CustomFooter/>
            </div>
        </VideoContext.Provider>
    );
}

export default App;
