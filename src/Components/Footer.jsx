import React from "react";
import logo from "../Images/white.png";
import PhoneIphoneIcon from '@material-ui/icons/PhoneIphone';
import EmailIcon from '@material-ui/icons/Email';
//importing material-ui framework icons
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import YouTubeIcon from '@material-ui/icons/YouTube';
import TwitterIcon from '@material-ui/icons/Twitter';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';

const Footer = () => {
    return(
        <React.Fragment>
         <div className = "outer-footer-div">
         <div class="container">
          <div class="row">
           <div class="col-sm">
              <img src = {logo} alt = "temporary error!"/>
              <h2 id = "contact">Contact</h2>
              <hr id = "under-line"/>
              <h5><PhoneIphoneIcon id = "footerIcon"/>+923110369359</h5>
              <hr />
              <h5><EmailIcon id = "footerIcon"/>erisingtrainers@gmail.com</h5>
              <hr />
              <h2>Social Links</h2>
            <hr id = "under-line"/>
            <a href = "https://m.facebook.com/RealERisingTrainers/?tsid=0.513857891154099&source=result" target = "blank"><FacebookIcon id = "footersocialMediaIcons"/></a>
            <a href = "https://www.instagram.com/erisingtrainers/" target = "blank"><InstagramIcon id = "footersocialMediaIcons"/></a>
            <a href = "#" target = "blank"><TwitterIcon id = "footersocialMediaIcons"/></a>
            <a href = "#" target = "blank"><LinkedInIcon id = "footersocialMediaIcons"/></a>
          </div>
          <div class="col-sm">
            <h2>Courses</h2>
            <hr id = "under-line"/>
            <a href = "#"><ArrowForwardIosIcon id = "arrowIcon"/>Web Development</a>
            <hr />
            <a href = "#"><ArrowForwardIosIcon id = "arrowIcon"/>Graphics Designing Masterclass</a>
            <hr />
            <a href = "#"><ArrowForwardIosIcon id = "arrowIcon"/>Social Media Marketing</a>
            <hr />
            <a href = "#"><ArrowForwardIosIcon id = "arrowIcon"/>Digital Freelancing</a>
            <hr />
            <a href = "#"><ArrowForwardIosIcon id = "arrowIcon"/>Video Editing Masterclass</a>
            <hr />
            <a href = "#"><ArrowForwardIosIcon id = "arrowIcon"/>English Communication</a>
            <hr />
          </div>
          <div class="col-sm">
          <h2>Flow</h2>
            <hr id = "under-line"/>
            <a href = "#"><ArrowForwardIosIcon id = "arrowIcon"/>About Us</a>
            <hr />
            <a href = "#"><ArrowForwardIosIcon id = "arrowIcon"/>Courses</a>
            <hr />
            <a href = "#"><ArrowForwardIosIcon id = "arrowIcon"/>Mentors</a>
            <hr />
            <a href = "#"><ArrowForwardIosIcon id = "arrowIcon"/>Ambassadors</a>
            <hr />
            <a href = "#"><ArrowForwardIosIcon id = "arrowIcon"/>Reviews</a>
            <hr />
            <a href = "#"><ArrowForwardIosIcon id = "arrowIcon"/>Contact Us</a>
            <hr />
          </div>
         </div>
       </div>
    </div>
    <div className = "bottom-div">
        <p>&#169; 2021 E-Rising Trainers. All Rights Reserved</p>
    </div>
        </React.Fragment>
    );
}
export default Footer;