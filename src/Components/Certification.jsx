import React from "react";
import eCert from "../Images/soft.jpeg";
import hardCert from "../Images/red.png";
import troffee from "../Images/troffee.png";
import CheckIcon from '@material-ui/icons/Check';
import BrandingWatermarkIcon from '@material-ui/icons/BrandingWatermark';
import sttb from "../Images/sttb.png";
import ert from "../Images/white.png";

const Certification = () => {
    return(
        <React.Fragment>
            <div className = "outer-certification-div" id = "certification">
                <img src = {troffee} style = {{height:"10rem"}}/>
                <h1>Certification</h1>
                <hr id = "certificationLine"/>
                  <div class="container">
                    <div class="row">
                      <div class="col-sm">
                        <h2>Hardcopy and Softcopy Certificate</h2>
                        <h3>Awarded After Course Completion</h3>
                        <h4><BrandingWatermarkIcon id = "stampIcon"/>Attested by:</h4>
                        <h5><CheckIcon id = "tickIcon"/>STTB - Sindh Trade Testing Board <a href = "https://www.sindhttb.gov.pk/" target = "_blank">Visit Us</a></h5>
                        <h5><CheckIcon id = "tickIcon"/>ERT - E Rising Trainers</h5>
                        <div className = "tevta">
                        <img src = {ert} style = {{height:"11rem"}}/>
                        <img src = {sttb} style = {{height:"12rem"}}/>
                        </div>
                     </div>
                     <div class="col-sm">
                      <div id="carouselExampleSlidesOnly" className="carousel slide" data-ride="carousel">
                        <div className="carousel-inner">
                          <div className="carousel-item active">
                            <img className="d-block w-100" src={eCert} alt="First slide"/>
                         </div>
                        <div className="carousel-item">
                            <img className="d-block w-100" src={eCert} alt="Second slide"/>
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
export default Certification;