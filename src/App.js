import { Route, Routes } from "react-router-dom";
import Home from "./components/Home/Home";

import "./App.css";
import "./Media.css"
import Header from "./components/Shared/Header/Header";

function App() {
  return (
    <>
      {/* <Home></Home>   */}
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home/>}/>
      </Routes>
    </>
  );
}

export default App;
