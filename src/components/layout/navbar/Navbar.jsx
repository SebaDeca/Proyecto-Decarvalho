import CartWidget from "../../common/cartWidget/CartWidget";
import "./Navbar.css";
import { Link, Outlet } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <div className={"containerNavbar"}>
       <h1><Link to="/">Relojes De Carvalho</Link></h1>

        <ul className="categories">
          <Link to="/">Todos</Link>
          <Link to="/category/Hilfiger">Hilfiger</Link>
          <Link to="/category/Heuer">Heuer</Link>
        </ul>

        <CartWidget />
      </div>
     <Outlet />
    </div>
  );
};

export default Navbar;