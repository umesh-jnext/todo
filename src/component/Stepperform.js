import React from "react";
import Button from "@mui/material/Button";
import Toolbar from "@mui/material/Toolbar";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import Paper from "@mui/material/Paper";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import moment from "moment";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { add } from "../action/action";
import { AdapterMoment } from "@mui/x-date-pickers/AdapterMoment";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DesktopDatePicker } from "@mui/x-date-pickers/DesktopDatePicker";
const Stepperform = (props) => {
  let [step, setStep] = useState(1);
  const [data, setData] = useState({});
  const [disabled, setDisabled] = useState(false);
  const [error, setError] = useState({});
  const dispatch = useDispatch();
  let myState = useSelector((state) => state);
  console.log("my state is", myState);

  const getSteps = () => {
    return [
      "Select master blaster campaign settings",
      "Create an ad group",
      "Create an ad",
    ];
  };

  const onChange = (event) => {
    const newData = { ...data, [event.target.name]: event.target.value };
    setData(newData);

    // setData(newData);
  };
  const [value, setValue] = useState(moment(new Date()));

  const handleChange = (newValue, e) => {
    console.log(newValue);
    let dob = newValue.format("LL");
    setValue(newValue);
    const newData = { ...data, ["DOB"]: dob };
    setData(newData);
  };

  const prevStep = () => {
    if (step > 1) {
      step--;
    }
    setStep(step);
    setDisabled(false);
  };
  const handleValidatestep1 = () => {
    let flag = true;
    let errors = { firstnameError: "", lastnameError: "" };
    if (data?.firstname === undefined || data?.firstname === "") {
      flag = false;
      errors.firstnameError = "invalid first Name";
    } else {
      errors.firstnameError = "";
    }
    if (data?.lastname === undefined || data?.lastname === "") {
      flag = false;
      errors.lastnameError = "invalid last Name";
    } else {
      errors.lastnameError = "";
    }
    setError(errors);
    return flag;
  };
  const handleValidatestep2 = () => {
    let flag = true;
    let errors = { emailError: "", phoneError: "" };
    if (data?.email === undefined || data?.email === "") {
      flag = false;
      errors.emailError = "invalid email";
    } else {
      errors.emailError = "";
    }
    if (data?.phone === undefined || data?.phone === "") {
      flag = false;
      errors.phoneError = "invalid Phone Number";
    } else {
      errors.lastnameError = "";
    }
    setError(errors);
    return flag;
  };
  const handleValidatestep3 = () => {
    let flag = true;
    let errors = { addressError: "", dobError: "" };
    if (data?.address === undefined || data?.address === "") {
      flag = false;
      errors.addressError = "invalid email";
    } else {
      errors.addressError = "";
    }

    setError(errors);
    return flag;
  };
  const nextStep = () => {
    if (step === 2) {
      if (handleValidatestep2()) {
        if (step < 3) {
          step++;
        }
        setStep(step);
        dispatch(add(data));
      }
    }
    if (step === 1) {
      if (handleValidatestep1()) {
        if (step < 3) {
          step++;
        }
        setStep(step);
        dispatch(add(data));
      }
    }
  };
  const submit = () => {
    // this.form.submit();
    if (handleValidatestep3()) {
      setDisabled(true);
      dispatch(add(data));
      console.log(data);
      setData({});
      setValue(moment(new Date()));
    }
  };
  // if (
  //   data.firstname == "" ||
  //   data.lastname == "" ||
  //   data.email == "" ||
  //   data.phone == "" ||
  //   data.address == "" ||
  //   data.DOB == moment(new Date()).format("LL")
  // ) {
  //   setDisabled(true);
  // } else {
  //   setDisabled(false);
  // }

  const renderStep = () => {
    let content = null;
    switch (step) {
      case 1:
        content = (
          <div>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                "& > :not(style)": { m: 1 },
              }}
            >
              <TextField
                error={error?.firstnameError}
                helperText={error?.firstnameError}
                id="demo-helper-text-aligned"
                label="First Name"
                onChange={(e) => onChange(e)}
                name="firstname"
                value={data?.firstname || ""}
              />
              <TextField
                error={error?.lastnameError}
                helperText={error?.lastnameError}
                id="demo-helper-text-aligned"
                label="Last Name"
                onChange={(e) => onChange(e)}
                name="lastname"
                value={data?.lastname || ""}
              />
            </Box>
          </div>
        );
        break;
      case 2:
        content = (
          <div>
            {" "}
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                "& > :not(style)": { m: 1 },
              }}
            >
              <TextField
                error={error?.emailError}
                helperText={error?.emailError}
                id="email"
                label="Email Address"
                onChange={(e) => onChange(e)}
                name="email"
                value={data?.email || ""}
              />
              <TextField
                error={error?.phoneError}
                helperText={error?.phoneError}
                id="phone-number"
                label="Phone Number"
                onChange={(e) => onChange(e)}
                name="phone"
                value={data?.phone || ""}
              />
            </Box>
          </div>
        );
        break;
      case 3:
        content = (
          <div>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                "& > :not(style)": { m: 1 },
              }}
            >
              <TextField
                error={error?.addressError}
                helperText={error?.addressError}
                id="address"
                label="Address"
                onChange={(e) => onChange(e)}
                name="address"
                value={data?.address || ""}
              />
              <LocalizationProvider dateAdapter={AdapterMoment}>
                <DesktopDatePicker
                  label="BirthDay"
                  inputFormat="MM/DD/YYYY"
                  name="DOB"
                  value={value}
                  onChange={(e) => handleChange(e)}
                  renderInput={(params) => <TextField {...params} />}
                />
              </LocalizationProvider>
            </Box>
          </div>
        );
        break;
      default:
        content = <div>Error</div>;
        break;
    }
    return content;
  };

  const classes = props;
  const steps = getSteps();
  console.log("data is", data);

  return (
    <div className={classes.root}>
      <Paper square className={classes.paper}>
        <div className={classes.root}>
          <Stepper activeStep={step - 1} alternativeLabel>
            {steps.map((label) => (
              <Step key={label}>
                <StepLabel>{label}</StepLabel>
              </Step>
            ))}
          </Stepper>

          <Container>{renderStep()}</Container>

          <Toolbar className="btn-wrap">
            <Button
              onClick={prevStep}
              color="primary"
              variant="contained"
              style={{ marginRight: "16px" }}
              disabled={step === 1}
            >
              previous
            </Button>
            <div className={classes.grow} />
            <Button
              color="primary"
              variant="contained"
              onClick={() => {
                step < 3 ? nextStep() : submit();
              }}
              disabled={disabled}
            >
              {step < 3 ? "Next" : "Submit"}
            </Button>
          </Toolbar>
        </div>
      </Paper>
    </div>
  );
};

export default Stepperform;
