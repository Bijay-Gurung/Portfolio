import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./home.css";

export default function Home() {
  let faces = ["/PlayerFace1.png", "/PlayerFace2.png"];
  const [faceIndex, setFaceIndex] = useState(0);

  let texts = ["SoftwareEngineer", "Graphic Designer", "Data Analytics", "Video Editor", "Photo Grapher", "Photo Editor", "UI/Ux Designer"];
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
          <br />
          <p id="text2">Bijay Gurung</p>
          <br />
          <p id="text3">
            I'm a |<span>{texts[content]}</span>
          </p>
        </div>
      </section>
    </>
  );
}
