
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./components/Home/Home";


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
