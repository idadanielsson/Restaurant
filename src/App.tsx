import "./App.css";
import { Outlet, useNavigate } from "react-router-dom";
import { Nav } from "./components/nav/Nav";
import { BackgroundWrapper } from "./components/styled/Wrappers";
import { Footer } from "./components/footer/Footer";
import { HamburgerMenu } from "./components/hamburger/Hamburger";

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

        <footer>
          <Footer />
        </footer>
      </BackgroundWrapper>
    </>
  );
}

export default App;
