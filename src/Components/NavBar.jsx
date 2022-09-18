import React from "react";
import logo from "../Images/white.png";
//importing material-ui framework icons
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import YouTubeIcon from '@material-ui/icons/YouTube';
import TwitterIcon from '@material-ui/icons/Twitter';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';

const NavBar = () => {
  return (
    <React.Fragment>
      <div className="top-div">
        <h5>Welcome to ERT <span class="badge bg-danger" style={{ height: "2rem", width: "5rem", fontSize: "1.2rem" }}>Open!</span></h5>
        <a href = "https://m.facebook.com/RealERisingTrainers/?tsid=0.513857891154099&source=result" target = "blank"><FacebookIcon id="socialMediaIcons" /></a>
        <a href = "https://www.instagram.com/erisingtrainers/" target = "blank"><InstagramIcon id="socialMediaIcons" /></a>
        <a href = "" target = "blank"><TwitterIcon id="socialMediaIcons" /></a>
        <a href = "" target = "blank"><LinkedInIcon id="socialMediaIcons" /></a>
      </div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            <img src={logo} alt="Temporary Error!" style={{ width: "12rem", height: "6.5rem", marginLeft: "2rem", paddingBottom: "2rem"}} />
          </a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse justify-content-center" id="navbarNavDropdown">
            <ul className="navbar-nav">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#home">Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#about">About</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#courses">Courses</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#certification">Certification</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#trainers">Trainers</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#reviews">Reviews</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#ambassadors">Ambassadors</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#contact">Contact</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <div className="admission-alert-div">
        <marquee>Registration has commenced in Graphics Designing, Social Media Marketing, Web Development, English Communication, Video Editing, Digital Freelancing. Registration fee in only 1500 Rs. You can register yourself right now. Feel free to contact us for further queries.</marquee>
      </div>
    </React.Fragment>
  );
}
export default NavBar;
