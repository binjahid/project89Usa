import { Route, Routes } from "react-router-dom";
import Home from "./components/Home/Home";

import "./App.css";
import "./Media.css"

function App() {
  return (
    <>
      {/* <Home></Home> */}  
      <Routes>
        <Route path="/" element={<Home/>}/>
      </Routes>
    </>
  );
}

export default App;
