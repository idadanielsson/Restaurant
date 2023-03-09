import "./App.css";
import { Outlet } from "react-router-dom";
import { Nav } from "./components/nav/Nav";
import { BackgroundWrapper } from "./components/styled/Wrappers";

function App() {
  return (
    <>
      <BackgroundWrapper>
        <header>
          <Nav></Nav>
        </header>
        <main>
          <Outlet />
        </main>

        <footer></footer>
      </BackgroundWrapper>
    </>
  );
}

export default App;
