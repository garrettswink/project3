import { Link, useMatch, useResolvedPath  } from "react-router-dom";
import "../styles/Navbar.css";
import { useImperativeHandle } from "react";


export default function Navbar() {
  return (
    <nav className="nav">
      <Link to="/" className="site-title">
        Garrett's Portfolio
      </Link>

      <ul>
        <CustomLink to="/">About</CustomLink>
        <CustomLink to="/portfolio">Portfolio</CustomLink>
        <CustomLink to="/contact">Contact</CustomLink>
        <CustomLink to="/resume">Resume</CustomLink>
       
      </ul>
    </nav>
  );
}

function CustomLink ({ to, children, ...props }) {
  const resolvedPath = useResolvedPath(to)
  const isActive = useMatch({ path: resolvedPath.pathname, end: true })

  return (
    <li className={isActive ? "active" : ""}>
      <Link to={to} {...props}>
        {children}
        </Link>
    </li> 
  )
}
