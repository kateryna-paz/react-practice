import "./index.css";
import Card from "./components/Card";
import profile from "./storage";

function App() {
  return (
    <div className="app">
      <Card profile={profile} />
    </div>
  );
}

export default App;
