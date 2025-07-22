import { Link } from "react-router-dom";
import "./project.css";

export default function Project(){
    return(
        <>
        <nav className="nav">
        <div className="content">
          <Link to="/" id="home" className="link">
            Home
          </Link>
          <Link to="/about" id="about" className="link">
            About
          </Link>
          <Link to="/project" id="projects" className="link">
            Projects
          </Link>
          <Link to="" id="blog" className="link" style={{display: 'none'}}>
            Blogs
          </Link>
        </div>
      </nav>
        </>
    )
}