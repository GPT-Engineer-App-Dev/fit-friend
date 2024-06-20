import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Index from "./pages/Index.jsx";
import LogWorkout from "./pages/LogWorkout.jsx";
import Progress from "./pages/Progress.jsx"; // Import the new Progress page

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Index />} />
        <Route path="/log-workout" element={<LogWorkout />} />
        <Route path="/progress" element={<Progress />} /> {/* Add route for Progress page */}
      </Routes>
    </Router>
  );
}

export default App;