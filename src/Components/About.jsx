import React from "react";
import AboutImg from "../Images/about.png";
// importing motion framer
import { motion } from "framer-motion";
import Modal from '@material-ui/core/Modal';
import VerticalLinearStepper from "./VerticalLinearStepper";

const About = () => {
    return (
        <React.Fragment>
            <div className="about-div" id="about">
                <div className="container">
                    <div className="row">
                        <div class="col-sm">
                            <motion.img src={AboutImg} alt="Temporary Error!" animate={{ direction: 'left', scale: 1.2 }} />
                        </div>
                        <div class="col-sm">
                            <h2>About Us</h2>
                            <hr />
                            <p>E-Rising Trainers is basically virtual institute affiliated with STTB Sindh Trade Testing Board. We are providing online digital skills to all over the world at very low cost. Currently, we also provides digital courses - <span style = {{color:"#f9ff00"}}>Web Development, Video Editing, Social Media Marketing, Graphics Designing, Digital Freelancing</span> under the supervision of highly experienced mentors. E-Rising Trainers also providing internship opportunities to the most deserving and hardworking students also conduct competition between hardworking students and providing prizes to winners.</p>
                            {/* Offcanvas codeing starting form here */}

                            <a id="button" class="btn" data-bs-toggle="offcanvas" href="#offcanvasExample" role="button" aria-controls="offcanvasExample">READ MORE</a>
                            <div class="offcanvas offcanvas-start" tabindex="-1" id="offcanvasExample" aria-labelledby="offcanvasExampleLabel">
                                <div class="offcanvas-header">
                                    <h5 class="offcanvas-title" id="offcanvasExampleLabel" style = {{color:"#b62d16", fontSize:"2.5rem"}}>Career With E - Rising Trainers</h5>
                                    <button type="button" class="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                                </div>
                                <div class="offcanvas-body">
                                    <div>
                                        <VerticalLinearStepper />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
}
export default About;
