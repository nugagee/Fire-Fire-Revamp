import { Outlet } from "react-router-dom";
import NavbarDefault from "./components/NavbarDefault";
import { FooterWithSocialLinks } from "./components/Footer";

function App() {
  return (
    <div>
      <NavbarDefault />
      <Outlet />
      <FooterWithSocialLinks />
    </div>
  );
}

export default App;
