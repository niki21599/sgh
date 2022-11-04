import React from "react";
import "./Footer.css";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <div className="footer">
      <div className="links">
        <Link to="/impressum" className="link">
          {" "}
          Impressum{" "}
        </Link>
        |
        <Link to="/datenschutz" className="link">
          {" "}
          Datenschutz
        </Link>
      </div>
      <div className="copyright">
        {" "}
        SG Hochwald © 2022. Alle Rechte vorbehalten. Created by Niklas Burg
      </div>
    </div>
  );
}
