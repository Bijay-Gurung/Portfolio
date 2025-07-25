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

      <div className="projects">
        <h3>Projects</h3>
        <div className="projcard">
            <div className="front">
                <p className="text">Swasthya Ghanti</p>
            </div>

            <div className="back">
                <p className="inf">Swasthya Ghanti is a medication reminder app that helps users manage and remember their daily medication schedule.</p>
            </div>
        </div>

        <div className="projcard1">
          <div className="front1">
            <p className="text1">Team Collab</p>
          </div>

          <div className="back1">
            <p className="inf1">Team Collab is a collaborative project management platform designed to help teams organize, track, and manage their work efficiently.</p>
          </div>
        </div>

        <div className="projcard2">
          <div className="front2">
            <p className="text2">Boost Productivity & Health</p>
          </div>

          <div className="back2">
            <p className="inf2">Boost productivity & health is a comprehensive app designed to help users enhance their daily productivity and maintain a healthy life.</p>
          </div>
        </div>

        <div className="projcard3">
          <div className="front3">
            <p className="text3">Whack a Mole</p>
          </div>

          <div className="back3">
            <p className="inf3">Whack a Mole is a interactive, and fun game where user can test their reflex by quickly hitting the mole that randomly appear from different holes.</p>
          </div>
        </div>

        <div className="projcard4">
          <div className="front4">
            <p className="text4">Tic Tac Toe</p>
          </div>

          <div className="back4">
            <p className="inf4">Tic Tac Toe is a fun, and competitive game of two players who take turns marking the spaces in a three-by-three grid, one with X and other with O.</p>
          </div>
        </div>
      </div>
        </>
    )
}