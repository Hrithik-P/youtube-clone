import "./App.css";
import "./style/style.css";
import Header from "./Components/Header/Header";
import Sidebar from "./Components/Sidebar/Sidebar";

import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
function App() {
  return (
    <div className="App">
      <Header />
      <div
        className="d-flex "
        style={{
          marginTop: "8vh",
          padding: "0.5rem 2rem",
        }}
      >
        <Sidebar />

        <div
          className=" p-2 content-scrollbar"
          style={{
            maxWidth: "85vw",
            maxHeight: "100vh",
          }}
        >
          <Routes>
            <Route index element={<Home />} />
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;
