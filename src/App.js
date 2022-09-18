import React from "react";
import Particles from "react-particles-js";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import NavBar from "./Components/NavBar";
import Home from "./Components/Home";
import About from "./Components/About";
import Footer from "./Components/Footer";
import WhatsAppWidget from "./Components/WhatsAppWidget";
import Courses from "./Components/Courses";
import Certification from "./Components/Certification";
import Mentors from "./Components/Mentors";
import Partners from "./Components/Partners";
import Testimonials from "./Components/Testimonials";
import Contact from "./Components/Contact";
function App() {
  return (
    <React.Fragment>
      <Particles
        params={{
          particles: {
            number: {
              value: 5,
              density: {
                enable: true,
                value_area: 600
              }
            },
            shape: {
              type: "square",
              stroke: {
                width: 10,
                opacity: 10,
                color: "#918f90",
              }
            }
          }
        }}
      />
      <Particles
        params={{
          particles: {
            number: {
              value: 5,
              density: {
                enable: true,
                value_area: 600
              }
            },
            shape: {
              type: "circle",
              stroke: {
                width: 10,
                opacity: 10,
                color: "#b62d16",
              }
            }
          }
        }}
      />
      <Particles
        params={{
          particles: {
            number: {
              value: 1,
              density: {
                enable: true,
                value_area: 600
              }
            },
            shape: {
              type: "circle",
              stroke: {
                width: 15,
                opacity: 10,
                color: "#000000",
              }
            }
          }
        }}
      />

      <Particles
        params={{
          particles: {
            number: {
              value: 5,
              density: {
                enable: true,
                value_area: 600
              }
            },
            shape: {
              type: "triangle",
              stroke: {
                width: 10,
                opacity: 10,
                color: "#000000",
              }
            }
          }
        }} />
      <NavBar />
      <Home />
      {/* <WhatsAppWidget /> */}
      <About />
      <Courses />
      <Certification />
      <Mentors />
      <Testimonials />
      <Partners />
      <Contact />
      <Footer />
    </React.Fragment>
  );
}
export default App;
