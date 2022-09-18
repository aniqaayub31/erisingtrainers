import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import StepContent from '@material-ui/core/StepContent';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
  },
  button: {
    marginTop: theme.spacing(1),
    marginRight: theme.spacing(1),
  },
  actionsContainer: {
    marginBottom: theme.spacing(2),
  },
  resetContainer: {
    padding: theme.spacing(3),
  },
}));

function getSteps() {
  return ['Attend Free Remote Demo Session with the Top Rated Mentors and Get Productive Guidelines and Career Counselling', 'Get Enrolled with E Rising Trainers', 'Attend One Month remote Courses', 'Get Free Whatsapp and Zoom App Support 24/7', 'Get Course Completion Certificate attested by TEVTA', 'At the end ERT offers internship to the most deserving participents.'];
}

function getStepContent(step) {
  switch (step) {
    case 0:
      return `Orientation Session`;
    case 1:
      return 'Registration';
    case 2:
      return `1 Month Course`;
    case 3:
        return `Support`;
    case 4:
      return `Certification`;
    default:
      return 'Internship';
  }
}

export default function VerticalLinearStepper() {
  const classes = useStyles();
  const [activeStep, setActiveStep] = React.useState(0);
  const steps = getSteps();

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
  };

  return (
    <div className={classes.root}>
      <Stepper activeStep={activeStep} orientation="vertical">
        {steps.map((label, index) => (
          <Step key={label}>
            <StepLabel>{label}</StepLabel>
            <StepContent>
              <Typography style = {{color:"black", textAlign: "center"}}>{getStepContent(index)}</Typography>
              <div className={classes.actionsContainer}>
                <div>
                  <Button
                    style = {{borderColor:"#b62d16", borderWidth: ".2rem", borderStyle: "solid", color: "#b62d16"}}
                    disabled={activeStep === 0}
                    onClick={handleBack}
                    className={classes.button}
                  >
                    Back
                  </Button>
                  <Button
                  style = {{borderColor:"#b62d16", backgroundColor:"#b62d16", borderWidth: ".2rem", borderStyle: "solid", color: "white"}}
                    variant="contained"
                    color="primary"
                    onClick={handleNext}
                    className={classes.button}
                  >
                    {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
                  </Button>
                </div>
              </div>
            </StepContent>
          </Step>
        ))}
      </Stepper>
      {activeStep === steps.length && (
        <Paper square elevation={0} className={classes.resetContainer}>
          <Typography style = {{color:"black", fontSize:"1.5rem"}}>So, Are you ready to join our community if yes feel free to contact us on whatsapp and messenger for further queries.</Typography>
          <Button onClick={handleReset} className={classes.button} style = {{borderColor:"white", backgroundColor:"#b62d16", borderWidth: ".2rem", borderStyle: "solid", color: "white"}}>
            Explore Again
          </Button>
        </Paper>
      )}
    </div>
  );
}
