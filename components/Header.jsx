import { NavLink } from "react-router-dom";
import navLinks from "../data/navLinks";
import { useSearch } from "../context/SearchContext";

export default function Header() {
  const { setSearch } = useSearch();
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container">
          <a className="navbar-brand" href="#"></a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="collapse navbar-collapse d-flex justify-content-between"
            id="navbarNav"
          >
            <ul className="navbar-nav">
              {navLinks.map((link) => (
                <li className="nav-item" key={link.path}>
                  <NavLink
                    to={link.path}
                    className="nav-link"
                    aria-current="page"
                  >
                    {link.title}
                  </NavLink>
                </li>
              ))}
            </ul>
            <form className="d-flex" role="search">
              <input
                onChange={(e) => setSearch(e.target.value)}
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
            </form>
          </div>
        </div>
      </nav>
    </>
  );
}
