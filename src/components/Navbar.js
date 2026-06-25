import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <header className="navbar">
      <div className="nav-left">
        <NavLink className="brand" to="/">
          <div className="brand-icon">🍽</div>
          <span className="brand-name">FoodWeb</span>
        </NavLink>
      </div>

      <nav className="nav-center">
        <ul className="nav-links">
          <li>
            <NavLink to="/" className={({ isActive }) => (isActive ? "active" : "")}>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/about" className={({ isActive }) => (isActive ? "active" : "")}>
              About
            </NavLink>
          </li>
          <li>
            <a href="#help">Help</a>
          </li>
        </ul>
      </nav>

      <div className="nav-right">
        <a href="#search" className="icon-link">
          Search <span className="icon">🔍</span>
        </a>
        <a href="#cart" className="icon-link">
          Cart <span className="icon">🛍️</span>
        </a>
      </div>
    </header>
  );
}

export default Navbar;
