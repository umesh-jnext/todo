import React from "react";

import axios from "axios";
import { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";

const Axiosrestful = () => {
  const [myData, setmyData] = useState([]);
  const [isError, setisError] = useState("");
  const [checkboxValue, setcheckboxValue] = useState([]);
  const [formvalue, setformvalue] = useState("");
  const [IsEdit, setIsEdit] = useState(false);
  const cityData = [
    { id: 1, name: "Surat" },
    { id: 2, name: "Mumbai" },
    { id: 3, name: "Ahemdabad" },
    { id: 4, name: "Vadodara" },
    { id: 5, name: "Indore" },
    { id: 6, name: "Delhi" },
    { id: 7, name: "Banglore" },
    { id: 8, name: "Chennai" },
    { id: 9, name: "jaipur" },
    { id: 10, name: "Kolkata" },
    { id: 11, name: "Hydrabad" },
    { id: 12, name: "Chandigarh" },
    { id: 13, name: "Mysore" },
    { id: 14, name: "Patna" },
  ];
  const API = axios.create({
    baseURL: "https://630769cfc0d0f2b8012ef206.mockapi.io/",
  });

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    let tableRowData = { ...formvalue, [name]: value };
    setformvalue(tableRowData);
  };
  const CheckBoxChange = (e) => {
    const { name, value, checked } = e.target;
    if (checked) {
      let checkboxdata = [...checkboxValue, value];
      setcheckboxValue(checkboxdata);
      let tableRowData = { ...formvalue, [name]: checkboxdata };
      setformvalue(tableRowData);
    } else {
      let checkboxdata = checkboxValue.filter((element) => element !== value);
      setcheckboxValue(checkboxdata);
      let tableRowData = { ...formvalue, [name]: checkboxdata };
      setformvalue(tableRowData);
    }
  };
  const getData = async () => {
    try {
      let data = await API.get("/Employee");
      console.log("my data is", data);
      setmyData(data?.data);
    } catch (error) {
      console.log(error);
      setisError(error);
    }
  };
  useEffect(() => {
    getData(); // eslint-disable-next-line
  }, []);

  const createData = async () => {
    try {
      let newData = await API.post("/Employee", formvalue);
      console.log("added data is", newData?.data);
      // setmyData(newData?.data);
      getData();
      setformvalue("");
    } catch (error) {
      console.log(error);
      setisError(error);
    }
  };
  const deleteData = async (id) => {
    try {
      let data = await API.delete(`/Employee/${id}`);
      console.log("mydata after deleted", data);
      // setmyData(data?.data);
      getData();
    } catch (error) {
      console.log(error);
      setisError(error);
    }
  };
  const handleEdit = (element) => {
    setformvalue({
      id: element.id,
      name: element.name,
      city: element.city,
      Gender: element.Gender,
      email: element.email,
      phonenumber: element.phonenumber,
    });
    setIsEdit(true);
  };
  const updateData = async () => {
    setIsEdit(false);
    try {
      let data = await API.put(`/Employee/${formvalue.id}`, formvalue);
      console.log("3", data);
      // setmyData(data?.data);
      getData();
      setformvalue("");
    } catch (error) {
      console.log(error);
      setisError(error);
    }
  };
  console.log("formvalue is", formvalue);
  return (
    <>
      <div className="container">
        <FormGroup>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              "& > :not(style)": { m: 1 },
            }}
          >
            <TextField
              helperText="Please enter your name"
              id="demo-helper-text-aligned"
              label="Name"
              className="userinfo-input"
              onChange={(e) => handleOnChange(e)}
              name="name"
              value={formvalue?.name || ""}
            />
          </Box>

          <FormLabel
            className="checkbox-label"
            id="demo-radio-buttons-group-label"
          >
            City :{" "}
          </FormLabel>
          <Box className="checkbox-wrap">
            {cityData.map((element) => (
              <FormControlLabel
                key={element.id}
                onChange={(e) => CheckBoxChange(e)}
                control={<Checkbox />}
                label={element?.name}
                value={element?.name}
                name="city"
                checked={formvalue?.city?.includes(element?.name) || ""}
              />
            ))}
          </Box>
          <FormControl>
            <FormLabel id="demo-radio-buttons-group-label">Gender</FormLabel>

            <RadioGroup
              aria-labelledby="demo-radio-buttons-group-label"
              defaultValue="female"
              name="radio-button-group"
            >
              <Box className="radio-wrap">
                <FormControlLabel
                  onChange={(e) => handleOnChange(e)}
                  value="female"
                  control={<Radio />}
                  label="Female"
                  name="Gender"
                  checked={formvalue?.Gender === "female" || false}
                />
                <FormControlLabel
                  onChange={(e) => handleOnChange(e)}
                  value="male"
                  control={<Radio />}
                  label="Male"
                  name="Gender"
                  checked={formvalue?.Gender === "male" || false}
                />
                <FormControlLabel
                  onChange={(e) => handleOnChange(e)}
                  value="other"
                  control={<Radio />}
                  label="Other"
                  name="Gender"
                  checked={formvalue?.Gender === "other" || false}
                />
              </Box>
            </RadioGroup>
          </FormControl>
          <FormControl>
            <Box className="email-ph-wrap">
              <TextField
                type="email"
                id="email"
                className="userinfo-input"
                label="Email"
                variant="outlined"
                onChange={(e) => handleOnChange(e)}
                name="email"
                value={formvalue?.email || ""}
              />
              <TextField
                type="tel"
                id="ph"
                label="Phone Number"
                className="userinfo-input"
                variant="outlined"
                onChange={(e) => handleOnChange(e)}
                name="phonenumber"
                value={formvalue?.phonenumber || ""}
              />
            </Box>
          </FormControl>

          {IsEdit === false ? (
            <Stack spacing={2} direction="row" className="btn">
              <Button variant="contained" onClick={(e) => createData(e)}>
                Add
              </Button>
            </Stack>
          ) : (
            <Stack spacing={2} direction="row" className="btn">
              <Button variant="contained" onClick={(e) => updateData(e)}>
                Update
              </Button>
            </Stack>
          )}
        </FormGroup>

        <h2> Axios Api Data List</h2>
        {isError !== "" && <h2> {isError}</h2>}
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell align="right">Sr No.</TableCell>
                <TableCell>Name</TableCell>
                <TableCell align="right">city</TableCell>
                <TableCell align="right">Gender</TableCell>
                <TableCell align="right">Email</TableCell>
                <TableCell align="right">Phone No.</TableCell>
                <TableCell align="right">Edit/Delete</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {myData?.length > 0
                ? myData?.map((row, index) => (
                    <TableRow
                      key={index}
                      sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                    >
                      <TableCell align="right">{index + 1}</TableCell>
                      <TableCell component="th" scope="row">
                        {row.name}
                      </TableCell>
                      <TableCell align="right">{row.city.toString()}</TableCell>
                      <TableCell align="right">{row.Gender}</TableCell>
                      <TableCell align="right">{row.email}</TableCell>
                      <TableCell align="right">{row.phonenumber}</TableCell>
                      <TableCell align="right">
                        <ButtonGroup
                          variant="contained"
                          aria-label="outlined primary button group"
                        >
                          <Button onClick={() => handleEdit(row)}>Edit</Button>
                          <Button onClick={() => deleteData(row.id)}>
                            Delete
                          </Button>
                        </ButtonGroup>
                      </TableCell>
                    </TableRow>
                  ))
                : "No record found"}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    </>
  );
};
export default Axiosrestful;
