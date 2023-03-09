import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { Home } from "./components/restaurant/home/Home";
import { Outlet } from "react-router-dom";
import { Nav } from "./components/nav/Nav";
import { BackgroundWrapper } from "./components/styled/Wrappers";

function App() {
  return (
    <>
      <header>
        <Nav></Nav>
      </header>
      <BackgroundWrapper>
        <Outlet />
      </BackgroundWrapper>
      <footer></footer>
    </>
  );
}

export default App;
