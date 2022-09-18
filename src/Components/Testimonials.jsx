import React from "react";
import StarIcon from '@material-ui/icons/Star';
import StarBorderIcon from '@material-ui/icons/StarBorder';
import StarHalfIcon from '@material-ui/icons/StarHalf';
import img1 from "../Images/about.png";
import ForumIcon from '@material-ui/icons/Forum';

const Testimonials = () => {
    return(
        <React.Fragment>
        <div className = "testimonials-outer-div" id = "reviews">
            <h1>Testimonials</h1>
            <hr id = "testimonialLine"/>
         <div className="container">
         <h2>E - Rising Trainer's Students Feedback</h2>
         <div id="myCarousel" className="carousel slide" data-ride="carousel">
         {/* <!-- Wrapper for slides --> */}
          <div className="carousel-inner">
           <div className="item active">
            <div className="carousel-caption">
             <ForumIcon id = "forumicon"/>
             <h1>Daniqa Rizwan</h1>
             <h2>Video Editing</h2>
             <p>The video editing course is wonderful, especially for a beginner. The teacher is amazing and guides very well. I am really enjoying your course and I literally appreciate your efforts and specially Shazan Jaffri. He is guiding us step by step in everything.</p>
            <StarIcon id = "staricon"/><StarIcon id = "staricon"/><StarIcon id = "staricon"/><StarIcon id = "staricon"/><StarIcon id = "staricon"/>
           </div>
         </div>
         <div className="item">
            <div className="carousel-caption">
             <ForumIcon id = "forumicon"/>
             <h1>Sofia Marchant</h1>
             <h2>Web Development</h2>
             <p>I'm enjoying Web Development Course. Mentor Miss Aniqa Ayub is too good and her teaching style is amazing. E-Rising Trainers Institute is a glorious virtual platform specially for distance learning students. So, I recommend to all of you guys be a part of this institute.</p>
             <StarIcon id = "staricon"/><StarIcon id = "staricon"/><StarIcon id = "staricon"/><StarIcon id = "staricon"/><StarBorderIcon id = "staricon"/>
           </div>
        </div>
        <div className="item">
            <div className="carousel-caption">
             <ForumIcon id = "forumicon"/>
             <h1>Rabia Mustafa</h1>
             <h2>Graphics Designing</h2>
             <p>I attend almost all classes and also learnt many things from Sir Arbaz Akmal and Sir Shazan Jaffri. Always admire your institute and their nice mentors who convey their lecture properly and also appreciate their grand session master classes even no one institute have such like classes though online.</p>
             <StarIcon id = "staricon"/><StarIcon id = "staricon" /><StarIcon id = "staricon"/><StarIcon id = "staricon"/><StarHalfIcon id = "staricon"/>
           </div>
        </div>
        <div className="item">
            <div className="carousel-caption">
             <ForumIcon id = "forumicon"/>
             <h1>Mehr Ul Nisa</h1>
             <h2>English Communication</h2>
             <p>I enrolled in English course and I am very thankful to E-Rising Trainers community to provide a better environment and give us a good knowledge. The way to teach us Miss Aqsa is amazing and understandable and I really appreciate your work, your team work and I highly recommend to join this platform.</p>
             <StarIcon id = "staricon"/><StarIcon id = "staricon" /><StarIcon id = "staricon"/><StarIcon id = "staricon"/><StarHalfIcon id = "staricon"/>
           </div>
        </div>
        <div className="item">
            <div className="carousel-caption">
             <ForumIcon id = "forumicon"/>
             <h1>Maryum Asif</h1>
             <h2>Social Media Marketing</h2>
             <p>We are enjoying everyday session of Social Media Marketing and everyday learn much from it. I highly appreciate the whole E - Rising Trainers team and our beloved mentor for the hard work that they are putting. I recommend my community to join their courses.</p>
             <StarIcon id = "staricon"/><StarIcon id = "staricon" /><StarIcon id = "staricon"/><StarIcon id = "staricon"/><StarHalfIcon id = "staricon"/>
           </div>
        </div>
        <div className="item">
            <div className="carousel-caption">
             <ForumIcon id = "forumicon"/>
             <h1>Haseeb Rajput</h1>
             <h2>Digital Freelancing</h2>
             <p>I am really enjoying your course of Digital Freelancing by Miss Zobia Kanwal. Her way of teaching is too good and professional. I highly recommend to all of you guys to be a part of this community, if you really want to learnt.</p>
             <StarIcon id = "staricon"/><StarIcon id = "staricon" /><StarIcon id = "staricon"/><StarIcon id = "staricon"/><StarHalfIcon id = "staricon"/>
           </div>
        </div>
      </div>
    {/* <!-- Left and right controls --> */}
    <a className="left carousel-control" href="#myCarousel" data-slide="prev">
      <span className="glyphicon glyphicon-chevron-left"></span>
      <span className="sr-only">Previous</span>
    </a>
    <a className="right carousel-control" href="#myCarousel" data-slide="next">
      <span className="glyphicon glyphicon-chevron-right"></span>
      <span className="sr-only">Next</span>
    </a>
  </div>
</div>
</div>
        </React.Fragment>
    );
}
export default Testimonials;