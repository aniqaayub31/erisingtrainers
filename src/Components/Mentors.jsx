import React from "react";
import StarBorderIcon from '@material-ui/icons/StarBorder';
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import YouTubeIcon from '@material-ui/icons/YouTube';
import TwitterIcon from '@material-ui/icons/Twitter';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import TrendingFlatIcon from '@material-ui/icons/TrendingFlat';

import ReactStars from "react-rating-stars-component";
const ratingChanged = (newRating) => {
    console.log(newRating);
};
const Mentors = () => {
    return (
        <React.Fragment>
            <div className="outer-mentors-div" id="trainers">
                <h1>Mentors</h1>
                <hr id="mentorshr" />
                <div class="container">
                    <div class="row">
                        <div class="col-sm col-12 col-sm-12 col-md-6 col-lg-4 col-xl-4 col-xxl-4">
                            <div className="box1">
                                <div className="mentor-intro-div">
                                    <h5>Hello</h5>
                                    <h1>I'm Arbaz Akmal</h1>
                                    <h3>Senior Graphics Designer</h3>
                                    <hr />
                                    <table>
                                        <tr>
                                            <td><b>Education:</b></td>
                                            <td>Masters in Commerce</td>
                                        </tr>
                                        <tr>
                                            <td><b>EXPERTISE:</b></td>
                                            <td>Grapics Designer</td>
                                        </tr>
                                        <tr>
                                            <td><b>EXPERIENCE:</b></td>
                                            <td>3 YEARS</td>
                                        </tr>
                                        <tr>
                                            <td><b>OCCUPATION:</b></td>
                                            <td>Senior Graphics Designer</td>
                                        </tr>
                                    </table>
                                    <FacebookIcon id="mentorSocialLinks" />
                                    <InstagramIcon id="mentorSocialLinks" />
                                    <TwitterIcon id="mentorSocialLinks" />
                                    <YouTubeIcon id="mentorSocialLinks" />
                                    <LinkedInIcon id="mentorSocialLinks" />
                                    <div className="details">
                                        <h2>ABOUT ME</h2>
                                        <p>I am Arbaz Akmal and I belong to Hyderabad. I am a Graphics Designer and I have experience of 3 years. Currently, I am doing Masters in Commerce. Previously, I have worked with LWE as a Graphics Designer. I have been giving Graphics Designing Training to many students.</p>
                                        <ReactStars classNames="ReactStars"
                                            count={5}
                                            onChange={ratingChanged}
                                            size={25}
                                            isHalf={true}
                                            emptyIcon={<i className="far fa-star"></i>}
                                            halfIcon={<i className="fa fa-star-half-alt"></i>}
                                            fullIcon={<i className="fa fa-star"></i>}
                                            activeColor="#ffd700"
                                        />
                                        <hr />
                                        <FacebookIcon id="mentorsocialMediaIcons" />
                                        <InstagramIcon id="mentorsocialMediaIcons" />
                                        <TwitterIcon id="mentorsocialMediaIcons" />
                                        <YouTubeIcon id="mentorsocialMediaIcons" />
                                        <LinkedInIcon id="mentorsocialMediaIcons" />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-sm col-12 col-sm-12 col-md-6 col-lg-4 col-xl-4 col-xxl-4">
                            <div className="box1">
                                <div className="mentor-intro-div">
                                    <h5>Hello</h5>
                                    <h1>I'm Aniqa Ayub</h1>
                                    <h3>Senior Frontend Web Developer</h3>
                                    <hr />
                                    <table>
                                        <tr>
                                            <td><b>EDUCATION:</b></td>
                                            <td>BSCS</td>
                                        </tr>
                                        <tr>
                                            <td><b>EXPERTISE:</b></td>
                                            <td>Web Development</td>
                                        </tr>
                                        <tr>
                                            <td><b>EXPERIENCE:</b></td>
                                            <td>2 YEARS</td>
                                        </tr>
                                        <tr>
                                            <td><b>OCCUPATION:</b></td>
                                            <td>Senior Web Developer</td>
                                        </tr>
                                    </table>
                                    <FacebookIcon id="mentorSocialLinks" />
                                    <InstagramIcon id="mentorSocialLinks" />
                                    <TwitterIcon id="mentorSocialLinks" />
                                    <YouTubeIcon id="mentorSocialLinks" />
                                    <LinkedInIcon id="mentorSocialLinks" />
                                    <div className="details">
                                        <h2>ABOUT ME</h2>
                                        <p>Hey, This is Aniqa Ayub. I am a Website Developer and Content Creator since 2018. I am also a Web Application Penetration Tester and currently donig MS in Information Security. I live in Punjab, Pakistan and my dream is pursue my skills as my career. Recently, I have worked with an E-Pro Trainers as Frontend Instructor.</p>
                                        <ReactStars classNames="ReactStars"
                                            count={5}
                                            onChange={ratingChanged}
                                            size={25}
                                            isHalf={true}
                                            emptyIcon={<i className="far fa-star"></i>}
                                            halfIcon={<i className="fa fa-star-half-alt"></i>}
                                            fullIcon={<i className="fa fa-star"></i>}
                                            activeColor="#ffd700"
                                        />
                                        <hr />
                                        <FacebookIcon id="mentorsocialMediaIcons" />
                                        <InstagramIcon id="mentorsocialMediaIcons" />
                                        <TwitterIcon id="mentorsocialMediaIcons" />
                                        <YouTubeIcon id="mentorsocialMediaIcons" />
                                        <LinkedInIcon id="mentorsocialMediaIcons" />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-sm col-12 col-sm-12 col-md-6 col-lg-4 col-xl-4 col-xxl-4">
                            <div className="box1">
                                <div className="mentor-intro-div">
                                    <h5>Hello</h5>
                                    <h1>I'm Sharmeen Ismail</h1>
                                    <h3>Lecturer at University of Karachi</h3>
                                    <hr />
                                    <table>
                                        <tr>
                                            <td><b>EDUCATION:</b></td>
                                            <td>M.Phil in ELT</td>
                                        </tr>
                                        <tr>
                                            <td><b>EXPERTISE:</b></td>
                                            <td>Communication Skills</td>
                                        </tr>
                                        <tr>
                                            <td><b>EXPERIENCE:</b></td>
                                            <td>10 YEARS</td>
                                        </tr>
                                        <tr>
                                            <td><b>OCCUPATION:</b></td>
                                            <td>Lecturer</td>
                                        </tr>
                                    </table>
                                    <FacebookIcon id="mentorSocialLinks" />
                                    <InstagramIcon id="mentorSocialLinks" />
                                    <TwitterIcon id="mentorSocialLinks" />
                                    <YouTubeIcon id="mentorSocialLinks" />
                                    <LinkedInIcon id="mentorSocialLinks" />
                                    <div className="details">
                                        <h2>ABOUT ME</h2>
                                        <p>This is Miss Sharmeen Ismail, I am a lecturer at University of Karachi. Currently, I am pursuing M.Phil in ELT & Applied Linguistics from University of Karachi. I have taught ESL for ten years at various Universities; including Ziauddin University, Textile Institute of Pakistan, University of Karachi and NUML. My research articles have been published in HEC recognized journals.</p>
                                        <ReactStars classNames="ReactStars"
                                            count={5}
                                            onChange={ratingChanged}
                                            size={25}
                                            isHalf={true}
                                            emptyIcon={<i className="far fa-star"></i>}
                                            halfIcon={<i className="fa fa-star-half-alt"></i>}
                                            fullIcon={<i className="fa fa-star"></i>}
                                            activeColor="#ffd700"
                                        />
                                        <hr />
                                        <FacebookIcon id="mentorsocialMediaIcons" />
                                        <InstagramIcon id="mentorsocialMediaIcons" />
                                        <TwitterIcon id="mentorsocialMediaIcons" />
                                        <YouTubeIcon id="mentorsocialMediaIcons" />
                                        <LinkedInIcon id="mentorsocialMediaIcons" />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-sm col-12 col-sm-12 col-md-6 col-lg-4 col-xl-4 col-xxl-4">
                            <div className="box1">
                                <div className="mentor-intro-div">
                                    <h5>Hello</h5>
                                    <h1>I'm Talha Gulam</h1>
                                    <h3>Social Media Expert</h3>
                                    <hr />
                                    <table>
                                        <tr>
                                            <td><b>EDUCATION:</b></td>
                                            <td>BSIT</td>
                                        </tr>
                                        <tr>
                                            <td><b>EXPERTISE:</b></td>
                                            <td>Social Media Marketing</td>
                                        </tr>
                                        <tr>
                                            <td><b>EXPERIENCE:</b></td>
                                            <td>5 YEARS</td>
                                        </tr>
                                        <tr>
                                            <td><b>OCCUPATION:</b></td>
                                            <td>Social Media Expert</td>
                                        </tr>
                                    </table>
                                    <FacebookIcon id="mentorSocialLinks" />
                                    <InstagramIcon id="mentorSocialLinks" />
                                    <TwitterIcon id="mentorSocialLinks" />
                                    <YouTubeIcon id="mentorSocialLinks" />
                                    <LinkedInIcon id="mentorSocialLinks" />
                                    <div className="details">
                                        <h2>ABOUT ME</h2>
                                        <p>Mr. Talha Bin Gulam is a Social Media Expert, IT Trainer and Entrepreneur. He is a skilled IT trainer who has minimum experience of more than three years. He is skilled, talented and determined in his field. He is graduated from the reowned Middlesex University, London.</p>
                                        <ReactStars classNames="ReactStars"
                                            count={5}
                                            onChange={ratingChanged}
                                            size={25}
                                            isHalf={true}
                                            emptyIcon={<i className="far fa-star"></i>}
                                            halfIcon={<i className="fa fa-star-half-alt"></i>}
                                            fullIcon={<i className="fa fa-star"></i>}
                                            activeColor="#ffd700"
                                        />
                                        <hr />
                                        <FacebookIcon id="mentorsocialMediaIcons" />
                                        <InstagramIcon id="mentorsocialMediaIcons" />
                                        <TwitterIcon id="mentorsocialMediaIcons" />
                                        <YouTubeIcon id="mentorsocialMediaIcons" />
                                        <LinkedInIcon id="mentorsocialMediaIcons" />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-sm col-12 col-sm-12 col-md-6 col-lg-4 col-xl-4 col-xxl-4">
                            <div className="box1">
                                <div className="mentor-intro-div">
                                    <h5>Hello</h5>
                                    <h1>I'm Zobia Kanwal</h1>
                                    <h3>Freelancer Expert</h3>
                                    <hr />
                                    <table>
                                        <tr>
                                            <td><b>EDUCATION:</b></td>
                                            <td>BS - Computer Science</td>
                                        </tr>
                                        <tr>
                                            <td><b>EXPERTISE:</b></td>
                                            <td>Freelancer</td>
                                        </tr>
                                        <tr>
                                            <td><b>EXPERIENCE:</b></td>
                                            <td>3 YEARS</td>
                                        </tr>
                                        <tr>
                                            <td><b>OCCUPATION:</b></td>
                                            <td>Freelancer</td>
                                        </tr>
                                    </table>
                                    <FacebookIcon id="mentorSocialLinks" />
                                    <InstagramIcon id="mentorSocialLinks" />
                                    <TwitterIcon id="mentorSocialLinks" />
                                    <YouTubeIcon id="mentorSocialLinks" />
                                    <LinkedInIcon id="mentorSocialLinks" />
                                    <div className="details">
                                        <h2>ABOUT ME</h2>
                                        <p>Hey, This is Zobia Kanwal. I am Computer Science Graduate, Website Developer, Conversational AI Developer, IOT Instructor and top rated freelancer.</p>
                                        <ReactStars classNames="ReactStars"
                                            count={5}
                                            onChange={ratingChanged}
                                            size={25}
                                            isHalf={true}
                                            emptyIcon={<i className="far fa-star"></i>}
                                            halfIcon={<i className="fa fa-star-half-alt"></i>}
                                            fullIcon={<i className="fa fa-star"></i>}
                                            activeColor="#ffd700"
                                        />
                                        <hr />
                                        <FacebookIcon id="mentorsocialMediaIcons" />
                                        <InstagramIcon id="mentorsocialMediaIcons" />
                                        <TwitterIcon id="mentorsocialMediaIcons" />
                                        <YouTubeIcon id="mentorsocialMediaIcons" />
                                        <LinkedInIcon id="mentorsocialMediaIcons" />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-sm col-12 col-sm-12 col-md-6 col-lg-4 col-xl-4 col-xxl-4">
                            <div className="box1">
                                <div className="mentor-intro-div">
                                    <h5>Hello</h5>
                                    <h1>I'm Sheeraz Ahmed</h1>
                                    <h3>Video Editor</h3>
                                    <hr />
                                    <table>
                                        <tr>
                                            <td><b>EDUCATION:</b></td>
                                            <td>BSMS</td>
                                        </tr>
                                        <tr>
                                            <td><b>EXPERTISE:</b></td>
                                            <td>VIDEO EDITING</td>
                                        </tr>
                                        <tr>
                                            <td><b>EXPERIENCE:</b></td>
                                            <td>5 YEARS</td>
                                        </tr>
                                        <tr>
                                            <td><b>OCCUPATION:</b></td>
                                            <td>Video Editor</td>
                                        </tr>
                                    </table>
                                    <FacebookIcon id="mentorSocialLinks" />
                                    <InstagramIcon id="mentorSocialLinks" />
                                    <TwitterIcon id="mentorSocialLinks" />
                                    <YouTubeIcon id="mentorSocialLinks" />
                                    <LinkedInIcon id="mentorSocialLinks" />
                                    <div className="details">
                                        <h2>ABOUT ME</h2>
                                        <p>Hey, My name is Sheeraz I am a Video Editor, Director, DOP and Photographer and Media Science Student.</p>
                                        <ReactStars classNames="ReactStars"
                                            count={5}
                                            onChange={ratingChanged}
                                            size={25}
                                            isHalf={true}
                                            emptyIcon={<i className="far fa-star"></i>}
                                            halfIcon={<i className="fa fa-star-half-alt"></i>}
                                            fullIcon={<i className="fa fa-star"></i>}
                                            activeColor="#ffd700"
                                        />
                                        <hr />
                                        <FacebookIcon id="mentorsocialMediaIcons" />
                                        <InstagramIcon id="mentorsocialMediaIcons" />
                                        <TwitterIcon id="mentorsocialMediaIcons" />
                                        <YouTubeIcon id="mentorsocialMediaIcons" />
                                        <LinkedInIcon id="mentorsocialMediaIcons" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <button type="button" className="btn" id="button-more-courses">Explore More</button>
            </div>

        </React.Fragment>
    );
}
export default Mentors;