import CartWidget from "../../common/cartWidget/CartWidget";
import "./Navbar.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  let userRol = "user";

  return (
    <div className={"containerNavbar"}>
      <h1><Link to="/">Relojeria De Carvalho</Link></h1>

      <ul className="categories">
        <Link to="/">Todos</Link>
        <Link to="/category/Hilfiger">Hilfiger</Link>
        <Link to="/category/Heuer">Heuer</Link>
      </ul>

      {userRol === "admin" && <Link to="/dashboard">ADMIN</Link>}

      <CartWidget />
    </div>
  );
};

export default Navbar;