import "./index.css";
import Comments from "./components/Comments";

function App() {
  return (
    <div className="App">
      <h1>Bonjour</h1>
      <Comments currentUserId="1" />{" "}
    </div>
  );
}

export default App;
