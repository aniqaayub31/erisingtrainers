import React from "react";
import webDevelopment from "../Images/webdevelopment.jpg";
import video from "../Images/v.editing.jpg";
import smm from "../Images/smm.jpg";
import english from "../Images/english.jpg";
import gdesiging from "../Images/g-designing.jpg";
import freelancing from "../Images/FREELANCING.jpg";
import AccessTimeIcon from '@material-ui/icons/AccessTime';
import BookmarkBorderIcon from '@material-ui/icons/BookmarkBorder';
import TrendingFlatIcon from '@material-ui/icons/TrendingFlat';
const Courses = () => {
    function admissionAlert(){
        alert("Contact us on whatsapp or messenger for free registration.");
    }
    
    return(
        <React.Fragment>
           <div className = "courses" id = "courses">
               <h2>Find a Course</h2>
               <h1>Featured Courses</h1>
               <hr id = "coursesLine"/>
           <div class="container">
            <div class="row">
                <div class="col-12 col-sm-12 col-md-6 col-lg-4 col-xl-4 col-xxl-4">
                    <div className = "box">
                    <div className = "image-div">
                        <img src = {webDevelopment} alt = "temporary error!"/>
                        <h1>Web Development</h1>
                        <h2>Basic + Advance</h2>
                        <h3>1500 PKR/_</h3>
                        <hr id = "horizontalLine"/>
                        <h4 id = "duration"><AccessTimeIcon id = "courses-icons"/>30 Days Duration</h4>
                    </div>
                    <div class="details">
                        <BookmarkBorderIcon id = "details-icon"/>
                        <h1>Web Development</h1>
                        <hr />
                        <h2>HTML & CSS</h2>
                        <h4>Website Hosting & Github</h4>
                        <h4>Basic & Advance Level Included</h4>
                        <p>Frontend Fundamental course of one month. In this course you will learnt about frontend web development by using HTML & CSS.</p>
                        <button onClick = {admissionAlert}>Register</button>
                    </div>
                    </div>
                </div>
                <div class="col-12 col-sm-12 col-md-6 col-lg-4 col-xl-4 col-xxl-4">
                <div className = "box">
                    <div className = "image-div">
                        <img src = {smm} alt = "temporary error!"/>
                        <h1>Social Media Marketing</h1>
                        <h2>Basic + Advance</h2>
                        <h3>1500 PKR/_</h3>
                        <hr id = "horizontalLine"/>
                        <h4 id = "duration"><AccessTimeIcon id = "courses-icons"/>30 Days Duration</h4>
                    </div>
                    <div class="details">
                        <BookmarkBorderIcon id = "details-icon"/>
                        <h1>Social Media Marketing</h1>
                        <hr />
                        <h4>Basic & Advance Level Included</h4>
                        <p>Social Media Marketing course of one month. In this course you will learnt about online selling product, Client Grabbing and dealing by using different social media channel.</p>
                        <button onClick = {admissionAlert}>Get Register</button>
                    </div>
                    </div>
                    </div>
                <div class="col-12 col-sm-12 col-md-6 col-lg-4 col-xl-4 col-xxl-4">
                <div className = "box">
                    <div className = "image-div">
                        <img src = {video} alt = "temporary error!"/>
                        <h1>Video Editing Masterclass</h1>
                        <h2>Basic + Advance</h2>
                        <h2></h2>
                        <h3>1500 PKR/_</h3>
                        <hr id = "horizontalLine"/>
                        <h4 id = "duration"><AccessTimeIcon id = "courses-icons"/>30 Days Duration</h4>
                    </div>
                    <div class="details">
                        <BookmarkBorderIcon id = "details-icon"/>
                        <h1>Video Editing Masterclass</h1>
                        <hr />
                        <h4>Basic & Advance Level Included</h4>
                        <p>Pro Video Editing course of one month. In this course you will learnt about professional video editing under the supervision of highly professional mentors.</p>
                        <button onClick = {admissionAlert}>Get Register</button>
                    </div>
                    </div>
                </div>
                <div class="col-12 col-sm-12 col-md-6 col-lg-4 col-xl-4 col-xxl-4">
                <div className = "box">
                    <div className = "image-div">
                        <img src = {english} alt = "temporary error!"/>
                        <h1>English Communication</h1>
                        <h2>Basic + Advance</h2>
                        <h2></h2>
                        <h3>1500 PKR/_</h3>
                        <hr id = "horizontalLine"/>
                        <h4 id = "duration"><AccessTimeIcon id = "courses-icons"/>30 Days Duration</h4>
                    </div>
                    <div class="details">
                        <BookmarkBorderIcon id = "details-icon"/>
                        <h1>English Communication</h1>
                        <hr />
                        <h4>Included Basic & Advanced Level</h4>
                        <p>Spoken English course of one month. In this course you will learnt to speak english frequently like American accent.</p>
                        <button onClick = {admissionAlert}>Get Register</button>
                    </div>
                    </div>
                </div>
                <div class="col-12 col-sm-12 col-md-6 col-lg-4 col-xl-4 col-xxl-4">
                <div className = "box">
                    <div className = "image-div">
                        <img src = {gdesiging} alt = "temporary error!"/>
                        <h1>Graphics Designing Masterclass</h1>
                        <h2>Basic + Advance</h2>
                        <h2></h2>
                        <h3>1500 PKR/_</h3>
                        <hr id = "horizontalLine"/>
                        <h4 id = "duration"><AccessTimeIcon id = "courses-icons"/>30 Days Duration</h4>
                    </div>
                    <div class="details">
                        <BookmarkBorderIcon id = "details-icon"/>
                        <h1>Graphics Designing</h1>
                        <hr />
                        <h2>Illustrator & Photoshp</h2>
                        <h4>Included Basic & Advanced Level</h4>
                        <p>Graphics Designing course of one month. In this course you will learnt about logo, Flyer, Banner Designing. Branding, illustration and Vector Art etc.</p>
                        <button onClick = {admissionAlert}>Get Register</button>
                    </div>
                    </div>
                </div>
                <div class="col-12 col-sm-12 col-md-6 col-lg-4 col-xl-4 col-xxl-4">
                <div className = "box">
                    <div className = "image-div">
                        <img src = {freelancing} alt = "temporary error!"/>
                        <h1>Digital Freelancing Masterclass</h1>
                        <h2>Basic + Advance</h2>
                        <h2></h2>
                        <h3>1500 PKR/_</h3>
                        <hr id = "horizontalLine"/>
                        <h4 id = "duration"><AccessTimeIcon id = "courses-icons"/>30 Days Duration</h4>
                    </div>
                    <div class="details">
                        <BookmarkBorderIcon id = "details-icon"/>
                        <h2>Digital Freelancing and Instant Skills</h2>
                        <hr />
                        <h4>Freelancer, Upwork and Fiver</h4>
                        <p>Freelancing and Instant Skills course of one month. In this course you will learnt about gig creation and bidding.</p>
                        <button onClick = {admissionAlert}>Get Register</button>
                    </div>
                    </div>
                </div>
            </div>
        </div>
         <a href = "#moreCourses" id="button-more-courses" className="btn">Explore More</a>
    </div>
        </React.Fragment>
    );
}
export default Courses;