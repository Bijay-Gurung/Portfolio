import "./about.css";
import { Link } from "react-router-dom";
import Typewriter from "./Typewriter";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faGraduationCap} from '@fortawesome/free-solid-svg-icons';
import { faPython } from "@fortawesome/free-brands-svg-icons";
import { faJs } from "@fortawesome/free-brands-svg-icons";
import { faReact } from "@fortawesome/free-brands-svg-icons";
import { faNode } from "@fortawesome/free-brands-svg-icons";
import { faFlutter } from "@fortawesome/free-brands-svg-icons";
import { faJava } from "@fortawesome/free-brands-svg-icons";
import { faC } from "@fortawesome/free-solid-svg-icons";
import { faDartLang } from "@fortawesome/free-brands-svg-icons";
import { faDatabase } from "@fortawesome/free-solid-svg-icons";
import { faFigma } from "@fortawesome/free-brands-svg-icons";
import { faAws } from "@fortawesome/free-brands-svg-icons";
import { faFileExcel } from "@fortawesome/free-solid-svg-icons";
import { faFilePowerpoint } from "@fortawesome/free-solid-svg-icons";
import { faFileWord } from "@fortawesome/free-solid-svg-icons";
import { faHtml5 } from "@fortawesome/free-brands-svg-icons";
import { faCss } from "@fortawesome/free-brands-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faUnity } from "@fortawesome/free-brands-svg-icons";

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
              <Typewriter text={`Hi, I'm Bijay Gurung. I'm a Software Engineer.\nI have a passion for developing\nSoftware and Games. In my free time,\nI enjoy learning new thing and spending time with my family and friends.`} delay={50} />
            </p>
          </div>
        </div>

        <div className="skills">
          <div className="box"><h3>Skills</h3></div>
          <ul>
            <li><FontAwesomeIcon icon={faGraduationCap} id="gcap" />Mobile Application Development</li>
            <li><FontAwesomeIcon icon={faGraduationCap} id="gcap" />WEb Application Development</li>
            <li><FontAwesomeIcon icon={faGraduationCap} id="gcap" />Desktop Application Development</li>
            <li><FontAwesomeIcon icon={faGraduationCap} id="gcap" />Machine Learning</li>
            <li><FontAwesomeIcon icon={faGraduationCap} id="gcap" />Natural Language Processing</li>
            <li><FontAwesomeIcon icon={faGraduationCap} id="gcap" />Exploratory Data Analysis</li>
            <li><FontAwesomeIcon icon={faGraduationCap} id="gcap" />Statical Data Analysis</li>
            <li><FontAwesomeIcon icon={faGraduationCap} id="gcap" />Presentation</li>
            <li><FontAwesomeIcon icon={faGraduationCap} id="gcap" />Strategic Planning</li>
            <li><FontAwesomeIcon icon={faGraduationCap} id="gcap" />Cinematography</li>
            <li><FontAwesomeIcon icon={faGraduationCap} id="gcap" />Research</li>
            <li><FontAwesomeIcon icon={faGraduationCap} id="gcap" />UI/Ux Designing</li>
          </ul>
        </div>

        <div className="tools">
          <div className="tbox"><h3>Software & Tools</h3></div>

          <div className="st">
            <FontAwesomeIcon icon={faPython} id="python" className="i"/>
            <FontAwesomeIcon icon={faJs} id="javascript" className="i"/>
            <FontAwesomeIcon icon={faReact} id="react" className="i"/>
            <FontAwesomeIcon icon={faNode} id="node" className="i"/>
            <FontAwesomeIcon icon={faFlutter} id="flutter" className="i"/>
            <FontAwesomeIcon icon={faJava} id="java" className="i"/>
            <FontAwesomeIcon icon={faC} id="clan" className="i"/>
            <FontAwesomeIcon icon={faDartLang} id="dart" className="i"/>
            <FontAwesomeIcon icon={faDatabase} id="db" className="i"/>
            <FontAwesomeIcon icon={faFigma} id="figma" className="i"/>
            <FontAwesomeIcon icon={faAws} id="aws" className="i"/>
            <FontAwesomeIcon icon={faGithub} id="github" className="i"/>
            <FontAwesomeIcon icon={faFileExcel} id="excel" className="i"/>
            <FontAwesomeIcon icon={faFilePowerpoint} id="powerpoint" className="i"/>
            <FontAwesomeIcon icon={faFileWord} id="word" className="i"/>
            <FontAwesomeIcon icon={faHtml5} id="html" className="i"/>
            <FontAwesomeIcon icon={faCss} id="css" className="i"/>
            <FontAwesomeIcon icon={faUnity} id="unity" className="i"/>
          </div>
        </div>       
        
        {/* <div className="underDevelopment"></div> */}
      </section>

      
    </>
  );
}
