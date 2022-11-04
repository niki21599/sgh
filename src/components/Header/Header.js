import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import { useRef } from "react";

export default function Header({
  useOutsideWrapper,
  openDropdown,
  setOpenDropdown,
}) {
  let [open, setOpen] = React.useState(false);
  const wrapperRef = useRef(null);
  useOutsideWrapper(wrapperRef);

  return (
    <div className="header">
      <div className="left-container-header">
        <Link to="/">
          <img src="/logo.png" alt="" className="sgh-logo" />
        </Link>
        <h3 className="slogan">Gemeinsam. Stark. Verwurzelt.</h3>
      </div>
      <h3 className="responsive-slogan">Gemeinsam. Stark. Verwurzelt.</h3>

      {openDropdown ? (
        <div className="dropdown" ref={wrapperRef}>
          <Link
            to="/"
            className="responsive-menuPoint"
            onClick={() => setOpenDropdown(false)}
          >
            News
          </Link>
          <Link
            to="/mannschaften"
            className="responsive-menuPoint"
            onClick={() => setOpenDropdown(false)}
          >
            Mannschaften
          </Link>
          <Link
            to="/verein"
            className="responsive-menuPoint"
            onClick={() => setOpenDropdown(false)}
          >
            Der Verein
          </Link>
          <Link
            to="/sponsoren"
            className="responsive-menuPoint"
            onClick={() => setOpenDropdown(false)}
          >
            Sponsoren
          </Link>
          <Link
            to="/live"
            className="responsive-menuPoint lastPoint"
            onClick={() => setOpenDropdown(false)}
          >
            Liveticker
          </Link>
        </div>
      ) : (
        ""
      )}

      <IconButton
        size="large"
        edge="start"
        color="inherit"
        aria-label="menu"
        className="responsive-menu"
        onClick={() => setOpenDropdown(!openDropdown)}
      >
        <MenuIcon />
      </IconButton>

      <div className="linkBox">
        <Link to="/" className="menu-point">
          News
        </Link>
        <Link to="/mannschaften" className="menu-point">
          Mannschaften
        </Link>
        <Link to="/verein" className="menu-point">
          Der Verein
        </Link>
        <Link to="/sponsoren" className="menu-point">
          Sponsoren
        </Link>
        <Link to="/live" className="menu-point">
          Liveticker
        </Link>
      </div>
    </div>
  );
}
