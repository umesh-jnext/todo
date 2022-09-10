import * as React from "react";
import TextField from "@mui/material/TextField";
import Stack from "@mui/material/Stack";
import moment from "moment";
import { AdapterMoment } from "@mui/x-date-pickers/AdapterMoment";

import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { TimePicker } from "@mui/x-date-pickers/TimePicker";
import { DateTimePicker } from "@mui/x-date-pickers/DateTimePicker";
import { DesktopDatePicker } from "@mui/x-date-pickers/DesktopDatePicker";
import { MobileDatePicker } from "@mui/x-date-pickers/MobileDatePicker";
const Datetimepicker = () => {
  const [value, setValue] = React.useState(moment(new Date()));

  const handleChange = (newValue) => {
    return setValue(newValue);
  };
  let timediff = moment().diff(value, "milliseconds");
  let age = moment.duration(timediff);
  console.log(age._data);

  return (
    <>
      <div className="date-time-picker-wrap">
        <div className="header-wrap">Date Picker</div>
        <LocalizationProvider dateAdapter={AdapterMoment}>
          <Stack spacing={3}>
            <DesktopDatePicker
              label="Date desktop"
              inputFormat="MM/DD/YYYY"
              value={value}
              onChange={handleChange}
              renderInput={(params) => <TextField {...params} />}
            />
            <MobileDatePicker
              label="Date mobile"
              inputFormat="MM/DD/YYYY"
              value={value}
              onChange={handleChange}
              renderInput={(params) => <TextField {...params} />}
            />
            <div className="header-wrap"> Time Picker</div>
            <TimePicker
              label="Time"
              value={value}
              onChange={handleChange}
              renderInput={(params) => <TextField {...params} />}
            />
            <div className="header-wrap"> Date & Time Picker</div>
            <DateTimePicker
              label="Date&Time picker"
              value={value}
              onChange={handleChange}
              renderInput={(params) => <TextField {...params} />}
            />
          </Stack>
          <div className="header-wrap">Age Calculator</div>
          <h4> Select Your Birthday</h4>
          <Stack spacing={3}>
            <DesktopDatePicker
              label="Birthday"
              inputFormat="MM/DD/YYYY"
              value={value}
              onChange={handleChange}
              renderInput={(params) => <TextField {...params} />}
            />
          </Stack>

          <h5 className="age-calc">{`You Are ${age._data.years} Years, ${age._data.months} Months and ${age._data.days} Days Old`}</h5>
        </LocalizationProvider>
      </div>
    </>
  );
};

export default Datetimepicker;
