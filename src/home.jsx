import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./home.css";
import Typewriter from "./Typewriter";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faLinkedin} from '@fortawesome/free-brands-svg-icons';
import {faGithub} from '@fortawesome/free-brands-svg-icons';
import {faInstagram} from '@fortawesome/free-brands-svg-icons';
import {faEnvelope} from '@fortawesome/free-solid-svg-icons';

export default function Home() {
  let faces = ["/PlayerFace1.png", "/PlayerFace2.png"];
  const [faceIndex, setFaceIndex] = useState(0);

  let texts = ["SoftwareEngineer", "Game Developer", "Data Analyst", "Pixel Art Designer", "UI/Ux Designer"];
  const [content, setContent] = useState(0);

  useEffect(()=>{
    const interval = setInterval(()=>{
      setFaceIndex((prev) => (prev+1) % faces.length);
    }, 2000);

    return ()=> clearInterval(interval);
  }, []);

  useEffect(()=>{
    const interval1 = setInterval(()=>{
      setContent((prevs) => (prevs+1) % texts.length);
    }, 2000);

    return ()=> clearInterval(interval1);
  }, []);
  
  return (
    <>
      <nav className="nav">
        <div className="content">
          <Link to="" id="home" className="link">
            Home
          </Link>
          <Link to="" id="about" className="link">
            About
          </Link>
          <Link to="" id="projects" className="link">
            Projects
          </Link>
          <Link to="" id="blog" className="link">
            Blogs
          </Link>
        </div>
      </nav>

      <section>
        <div className="decoration">
          <div className="plant" id="plant1"></div>
          <div className="plant" id="plant2"></div>
        </div>

        <div className="profile" style={{backgroundImage: `url(${faces[faceIndex]})`}}></div>
        
        <div className="message">
          <p id="text1">Hello, I'm</p>
          <p id="text2" style={{marginTop: "10px"}}>Bijay Gurung</p>
          <div className="animation" style={{marginTop: "10px"}}>
            <p id="text3">I'm a |</p>
            <p id="typewriter"><Typewriter text={`${texts[content]}`} delay={100}/></p>
          </div>
        </div>
      </section>

      <footer className="footer">
        <div className="connect">
          <a href="https://www.linkedin.com/in/bijay-gurung-521b99263/" alt="Linkedin" target="_blank"><FontAwesomeIcon icon={faLinkedin} id="linkedin" /></a>
          <a href="https://github.com/Bijay-Gurung" alt="Github" target="_blank"><FontAwesomeIcon icon={faGithub} id="github" /></a>
          <a href="https://www.instagram.com/karma_gurung1/" alt="Instagram" target="_blank"><FontAwesomeIcon icon={faInstagram} id="instagram" /></a>
          <a href="mailto:bijay667812@gmail.com" alt="Mail" target="_blank"><FontAwesomeIcon icon={faEnvelope} id="mail" /></a>
        </div>
      </footer>
    </>
  );
}
