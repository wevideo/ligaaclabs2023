import "./App.css";
import CustomHeader from "./CustomHeader";
import CustomFooter from "./CustomFooter";
import Playlist from "./Playlist";
import VideoPlayer from "./VideoPlayer";

function App() {
  return (
    <div className="App">
      <CustomHeader title={"Liga Ac Player"}></CustomHeader>
      <main style={{ display: "flex", justifyContent: "space-between" }}>
        <VideoPlayer title={"Video 1"} />
        <Playlist />
      </main>
      <CustomFooter />
    </div>
  );
}

export default App;
