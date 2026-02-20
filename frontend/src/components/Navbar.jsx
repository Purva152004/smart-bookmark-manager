import { Moon, Sun } from "lucide-react";

function Navbar({ dark, setDark }) {
  return (
    <nav className="navbar">
      <div className="nav-left">
        <span className="logo">📌 Smart Bookmark</span>
      </div>

      <div className="nav-right">
        <div className="theme-toggle">
          <Sun size={16} />
          <label className="switch">
            <input
              type="checkbox"
              checked={dark}
              onChange={() => setDark(!dark)}
            />
            <span className="slider"></span>
          </label>
          <Moon size={16} />
        </div>
      </div>
    </nav>
  );
}

export default Navbar;