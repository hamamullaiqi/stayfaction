import "./assets/scss/style.scss";
import {  Route, Routes } from "react-router-dom";
import LandingPage from "pages/LandingPage";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path="/" element={<LandingPage path="/" />} />
      </Routes>
    </div>
  );
}

export default App;
