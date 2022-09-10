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
import React, { Component } from "react";

export class app2 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tabledata: [],
      formvalue: "",
      initialValues: [],
      IsEdit: false,
    };
  }

  handleOnChange = (e) => {
    const { name, value } = e.target;
    if (name === "city") {
      let tableRowData = {
        ...this.state.formvalue,
        [name]: e.target.checked === true ? "Surat" : "",
      };
      this.setState({ formvalue: tableRowData });
    } else if (name === "city2") {
      let tableRowData = {
        ...this.state.formvalue,
        [name]: e.target.checked === true ? "Mumbai" : "",
      };
      this.setState({ formvalue: tableRowData });
    } else {
      let tableRowData = { ...this.state.formvalue, [name]: value };
      this.setState({ formvalue: tableRowData });
    }
  };
  handleSubmit = (e) => {
    e.preventDefault();
    const tableRowData = {
      ...this.state.formvalue,
      id: this.state.tabledata.length + 1,
    };
    this.state.initialValues.push(tableRowData);
    this.setState({
      formvalue: "",
      tabledata: this.state.initialValues,
      initialValues: this.state.initialValues,
    });
  };
  handleDelete = (Id) => {
    const newtabledata = this.state.tabledata.filter(
      (element) => element.id !== Id
    );
    this.setState({
      tabledata: newtabledata,
    });
  };
  handleEdit = (element) => {
    this.setState({
      formvalue: {
        id: element.id,
        firstname: element.firstname,
        lastname: element.lastname,
        city: element.city,
        city2: element.city2,
        gender: element.gender,
        email: element.email,
        password: element.password,
      },
      IsEdit: true,
    });
  };
  handleUpdate = () => {
    this.setState({
      IsEdit: false,
      formvalue: "",
    });
    this.state.tabledata[this.state.formvalue.id - 1] = this.state.formvalue;
  };
  // console.log("form value is", formvalue);
  // console.log("tabledata value is ", tabledata);

  render() {
    return (
      <>
        <FormGroup>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              "& > :not(style)": { m: 1 },
            }}
          >
            <TextField
              helperText="Please enter your first name"
              id="demo-helper-text-aligned"
              label="First Name"
              onChange={(e) => this.handleOnChange(e)}
              name="firstname"
              value={this.state.formvalue?.firstname || ""}
            />
            <TextField
              helperText="Please enter your last name"
              id="demo-helper-text-aligned"
              label="Last Name"
              onChange={(e) => this.handleOnChange(e)}
              name="lastname"
              value={this.state.formvalue?.lastname || ""}
            />
          </Box>

          <FormLabel id="demo-radio-buttons-group-label">City</FormLabel>
          <FormControlLabel
            onChange={(e) => this.handleOnChange(e)}
            control={<Checkbox />}
            label="Surat"
            value="Surat"
            name="city"
            checked={this.state.formvalue?.city || ""}
          />
          <FormControlLabel
            onChange={(e) => this.handleOnChange(e)}
            control={<Checkbox />}
            label="Mumbai"
            // value="Mumbai"
            name="city2"
            checked={this.state.formvalue?.city2 || ""}
          />

          <FormControl>
            <FormLabel id="demo-radio-buttons-group-label">Gender</FormLabel>
            <RadioGroup
              aria-labelledby="demo-radio-buttons-group-label"
              defaultValue="female"
              name="radio-button-group"
            >
              <FormControlLabel
                onChange={(e) => this.handleOnChange(e)}
                value="female"
                control={<Radio />}
                label="Female"
                name="gender"
                checked={this.state.formvalue?.gender === "female" || false}
              />
              <FormControlLabel
                onChange={(e) => this.handleOnChange(e)}
                value="male"
                control={<Radio />}
                label="Male"
                name="gender"
                checked={this.state.formvalue?.gender === "male" || false}
              />
              <FormControlLabel
                onChange={(e) => this.handleOnChange(e)}
                value="other"
                control={<Radio />}
                label="Other"
                name="gender"
                checked={this.state.formvalue?.gender === "other" || false}
              />
            </RadioGroup>
          </FormControl>
          <FormControl>
            <Box>
              <TextField
                type="email"
                id="outlined-basic"
                label="Email"
                variant="outlined"
                onChange={(e) => this.handleOnChange(e)}
                name="email"
                value={this.state.formvalue?.email || ""}
              />
              <TextField
                type="password"
                id="outlined-basic"
                label="Password"
                variant="outlined"
                onChange={(e) => this.handleOnChange(e)}
                name="password"
                value={this.state.formvalue?.password || ""}
              />
            </Box>
          </FormControl>

          {this.state.IsEdit === false ? (
            <Stack spacing={2} direction="row">
              <Button variant="contained" onClick={(e) => this.handleSubmit(e)}>
                Submit
              </Button>
            </Stack>
          ) : (
            <Stack spacing={2} direction="row">
              <Button variant="contained" onClick={(e) => this.handleUpdate(e)}>
                Update
              </Button>
            </Stack>
          )}
        </FormGroup>
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell align="right">Sr No.</TableCell>
                <TableCell>First Name</TableCell>
                <TableCell align="right">Last Name</TableCell>
                <TableCell align="right">city/cities</TableCell>
                <TableCell align="right">Gender</TableCell>
                <TableCell align="right">Email</TableCell>
                <TableCell align="right">Password</TableCell>
                <TableCell align="right">Edit/Delete</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {this.state.tabledata.map((row, index) => (
                <TableRow
                  key={index}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell align="right">{index + 1}</TableCell>
                  <TableCell component="th" scope="row">
                    {row.firstname}
                  </TableCell>
                  <TableCell align="right">{row.lastname}</TableCell>
                  <TableCell align="right">
                    {row.city}
                    {row?.city2}
                  </TableCell>
                  <TableCell align="right">{row.gender}</TableCell>
                  <TableCell align="right">{row.email}</TableCell>
                  <TableCell align="right">{row.password}</TableCell>
                  <TableCell align="right">
                    <ButtonGroup
                      variant="contained"
                      aria-label="outlined primary button group"
                    >
                      <Button onClick={() => this.handleEdit(row)}>Edit</Button>
                      <Button onClick={() => this.handleDelete(row.id)}>
                        Delete
                      </Button>
                    </ButtonGroup>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </>
    );
  }
}

export default app2;
