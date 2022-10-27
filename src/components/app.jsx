import { Routes, Route } from "react-router-dom";
import Navbar from "./navbar";
import Home from "./home";
import Destination from "./destination";
import Crew from "./crew";
import Technology from "./technology";

const App = () => {
  return (
    <main className="page position-relative">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/destination" element={<Destination />} />
        <Route path="/crew" element={<Crew />} />
        <Route path="/technology" element={<Technology />} />
      </Routes>
    </main>
  );
};

export default App;
