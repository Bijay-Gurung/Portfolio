import "./about.css";
import { Link } from "react-router-dom";
import Typewriter from "./Typewriter";

export default function About() {
  return (
    <>
      <nav className="nav">
        <div className="content">
          <Link to="/" id="home" className="link">
            Home
          </Link>
          <Link to="/about" id="about" className="link">
            About
          </Link>
          <Link to="" id="projects" className="link">
            Projects
          </Link>
          <Link to="" id="blog" className="link" style={{ display: "none" }}>
            Blogs
          </Link>
        </div>
      </nav>

      <section id="section">
        <div className="card">
          <div className="image"></div>
          <div className="content">
            <p id="aboutme">
              <Typewriter text={`Hi, I'm Bijay Gurung. I'm a Software Engineer.\nI have a passion for developing\nSoftware and Games.In my free time,\nI enjoy learning new thing and spending time with my family and friends.`} delay={50} />
            </p>
          </div>
        </div>

        <div className="underDevelopment"></div>
      </section>

      
    </>
  );
}
