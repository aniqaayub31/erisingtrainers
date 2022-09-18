import React from "react";
import HeaderLogo from "../Images/red.png";
//importing auto typed library
import Typed from "react-typed";
//search icons from material ui frame work
import SearchIcon from '@material-ui/icons/Search';

const Home = () => {
    return(
        <React.Fragment>
            <div className = "header" id = "home">
                <div className = "header-info">
                    <img src = {HeaderLogo} alt = "Temporary Error!" style = {{width: "25rem", height: "10rem"}}/>
                    <h1 id = "sttb">Affiliated by STTB-Sindh Trade Testing Board</h1>
                    <h1>Getting Started With <span style = {{color: "#b62d16"}}>E-Rising Trainers</span></h1>
                    <Typed className = "typed-text"
                    strings = {["Frontend Web Development" , "Pro Graphics Designing" , "Pro Video Editing" , "Professional English Spoken" , "Social Media Marketing" , "Digital Freelancing"]}
                    typeSpeed = {40}
                    backSpeed = {60} />

                {/* Search Bar */}

                {/* <div class="input-group">
                 <div class="form-outline">
                  <input type="search" id="form1" class="form-control" placeholder = "What do you want to learn today?" />
                 </div> */}
                {/* <button type="button" class="btn btn-primary">
                  <SearchIcon style = {{width: "3rem", height: "3rem"}}/>
                </button> */}
                {/* </div> */}
                </div>
            </div>

        </React.Fragment>
    );
}
export default Home;