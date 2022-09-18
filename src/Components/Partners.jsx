import React from "react";
import skillmaster from "../Images/skillmaster.jpg";
import skillintrend from "../Images/skillinrend.jpg";
import growwithsuccess from "../Images/growwithsuccess.jpg";
import skillsinstitute from "../Images/skillsinstitute.jpg";

import TrendingFlatIcon from '@material-ui/icons/TrendingFlat';

const Partners = () => {
  return (
    <React.Fragment>
      <div className="outer-partner-div" id="ambassadors">
        <h1>Ambassadors</h1>
        <hr id="coursesLine" />
        <h3>E - Rising Trainers Business Partners at Market Level <sup><span class="badge" style={{ height: "2rem", fontSize: "1.2rem", backgroundColor: "#b62d16", color: "white" }}>APPROVED</span></sup></h3>
        <p>You can only register yourself with E - Rising Trainers through these ambassadors.</p>
        <div class="container">
          <div class="row">
            <div class="col col-12 col-sm-12 col-md-6 col-lg-4 col-xl-4 col-xxl-4">
              <img src={skillintrend} alt="temporary error!" />
            </div>
            <div class="col col-12 col-sm-12 col-md-6 col-lg-4 col-xl-4 col-xxl-4">
              <img src={skillmaster} alt="temporary error!" />
            </div>
            <div class="col col-12 col-sm-12 col-md-6 col-lg-4 col-xl-4 col-xxl-4">
              <img src={growwithsuccess} alt="temporary error!" />
            </div>
            <div class="col col-12 col-sm-12 col-md-6 col-lg-4 col-xl-4 col-xxl-4">
              <img src={skillsinstitute} alt="temporary error!" />
            </div>
          </div>
        </div>
        <button type="button" className="btn" id="button-more-partners">Explore More</button>
      </div>
    </React.Fragment>
  );
}
export default Partners;