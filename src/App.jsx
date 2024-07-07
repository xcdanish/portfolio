/* eslint-disable no-unused-vars */
// App.jsx
import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
// import reactLogo from './assets/react.svg';
// import viteLogo from '/vite.svg';
import "./App.css";
import Home from "./Component/Home";

function App() {
  // const [count, setCount] = useState(0);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
