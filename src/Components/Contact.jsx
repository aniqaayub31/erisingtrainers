import React from "react";
import emailjs from "emailjs-com";
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import YouTubeIcon from '@material-ui/icons/YouTube';
import TwitterIcon from '@material-ui/icons/Twitter';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import PhoneIphoneIcon from '@material-ui/icons/PhoneIphone';
import EmailIcon from '@material-ui/icons/Email';
import AddLocationIcon from '@material-ui/icons/AddLocation';

const Contact = () => {

    function sendEmail(e) {
        e.preventDefault();

        emailjs.sendForm('service_wtcvl8d', 'template_m6otokf', e.target, 'user_fEjVhbogNKWo7MW1zjMpV')
          .then((result) => {
              console.log(result.text);
              alert("Submitted Successfully");
          }, (error) => {
              console.log(error.text);
              alert("Submisson failed please try again");
          });
          e.target.reset();
    }
    

    return (
        <React.Fragment>
            <div className="outer-contact-div" id = "contact">
                <h1>Get In Touch</h1>
                <hr id="testimonialLine" />

                <div class="container">
                    <div class="row">
                        <div class="col-sm">
                            <h2>Contact</h2>
                            <hr id="under-line" />
                            <h5><PhoneIphoneIcon id="footerIcon" />+923110369359</h5>
                            <hr />
                            <h5><EmailIcon id="footerIcon" />erisingtrainers@gmail.com</h5>
                            <hr />
                            <h2>Location</h2>
                            <hr id="under-line" />
                            <address><AddLocationIcon id="footerIcon" />R 239, R 240, Block C, Bagh e Malir,<br /> Near gul Baloch football academy, and next<br /> to Saeed Academy</address>
                            <hr />
                            <h2>Social Links</h2>
                            <hr id="under-line" />
                            <a href = "https://m.facebook.com/RealERisingTrainers/?tsid=0.513857891154099&source=result" target = "_blank"><FacebookIcon id="footersocialMediaIcons" /></a>
                            <a href = "https://www.instagram.com/erisingtrainers/" target = "_blank"><InstagramIcon id="footersocialMediaIcons" /></a>
                            <a href = "" target = "_blank"><TwitterIcon id="footersocialMediaIcons" /></a>
                            <a href = "" target = "_blank"><LinkedInIcon id="footersocialMediaIcons" /></a>
                        </div>
                        <div class="col-sm">
                            <form onSubmit={sendEmail} id="form">
                                <input type="text" id="inputField" placeholder="YOUR NAME *"  name="name" required/><br />
                                <input type="text" id="inputField" placeholder="YOUR EMAIL *"  name="email" required/><br />
                                <input type="text" id="inputField" placeholder="YOUR QUERY *"  name="query" required/><br />
                                <input type="textarea" id="textarea" placeholder="YOUR MESSAGE *"  name="message" required/><br />
                                <input type="submit" id="submitBtn" value="SUBMIT"/>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
}
export default Contact;