import { useSelector } from "react-redux";
import AllRoutes from "./AllRoutes/AllRoutes";
import "./App.css";

function App() {
  const userId = useSelector((state) => state.userId);
  console.log("state:", userId);
  return (
    <div className="App">
      <AllRoutes />
    </div>
  );
}

export default App;
