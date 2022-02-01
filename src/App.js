import Home from "./components/Home/Home";
import Header from "./components/Shared/Header/Header";
import RoadMap from "./components/RoadMap/RoadMap";
import Team from "./components/Team/Team";
import MarketPlace from "./components/MarketPlace/MarketPlace"
import Mint from "./components/Mint/Mint";

import { Route, Routes } from "react-router-dom";

import "./App.css";

import "./Media.css"
function App() {
  return (
    <>
      {/* <Home></Home>   */}
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/roadmap" element={<RoadMap/>}/>
        <Route path="/team" element={<Team/>}/>
        <Route path="/marketplace" element={<MarketPlace/>}/>
        <Route path="/mint" element={<Mint/>}/>
      </Routes>
    </>
  );
}

export default App;
