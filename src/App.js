import "./App.css";
import CustomHeader from "./CustomHeader";

function App() {
  return (
    <div className="App">
      <CustomHeader title={"Liga Ac Player"}></CustomHeader>
      <main>Content</main>
      <footer>
        <hr />
        &copy; Liga AC
      </footer>
    </div>
  );
}

export default App;
