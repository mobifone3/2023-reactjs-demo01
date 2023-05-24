import React from "react";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container">
        <Link className="navbar-brand" to="/">
          Home
        </Link>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item active"></li>
            <li className="nav-item">
              <Link className="nav-link" to="/form">
                Form
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/table">
                Bảng Dữ Liệu
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
