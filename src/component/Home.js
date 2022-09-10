import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { useState } from "react";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";

function Home() {
  const [tabledata, settabledata] = useState([]);
  const [formvalue, setformvalue] = useState("");
  const [initialValues, setinitialValues] = useState([]);
  const [IsEdit, setIsEdit] = useState(false);
  const [filterTableData, setfilterTableData] = useState([]);
  const [IsSearch, setIsSearch] = useState(false);
  const [searchvalue, setsearchvalue] = useState("");
  const handleOnChange = (e) => {
    const { name, value } = e.target;
    if (name === "city") {
      let tableRowData = {
        ...formvalue,
        [name]: e.target.checked === true ? "Surat" : "",
      };
      setformvalue(tableRowData);
    } else if (name === "city2") {
      let tableRowData = {
        ...formvalue,
        [name]: e.target.checked === true ? "Mumbai" : "",
      };
      setformvalue(tableRowData);
    } else {
      let tableRowData = { ...formvalue, [name]: value };
      setformvalue(tableRowData);
    }
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const tableRowData = { ...formvalue, id: tabledata.length + 1 };
    initialValues.push(tableRowData);
    settabledata(initialValues);
    setformvalue("");
    setinitialValues(initialValues);
  };
  const handleDelete = (Id) => {
    const newtabledata = tabledata.filter((element) => element.id !== Id);
    settabledata(newtabledata);
  };
  const handleEdit = (element) => {
    setformvalue({
      id: element.id,
      firstname: element.firstname,
      lastname: element.lastname,
      city: element.city,
      city2: element.city2,
      gender: element.gender,
      email: element.email,
      password: element.password,
    });
    setIsEdit(true);
  };
  const handleUpdate = () => {
    setIsEdit(false);
    tabledata[formvalue.id - 1] = formvalue;
    setformvalue("");
  };
  const handleSearch = (e) => {
    if (e.target.value !== "") {
      setIsSearch(true);
      const filterdata = tabledata?.filter((user) => {
        return user?.firstname
          ?.toLowerCase()
          .includes(e.target.value.toLowerCase());
      });
      setsearchvalue(e.target.value);
      setfilterTableData(filterdata);
    } else {
      setIsSearch(false);
      setsearchvalue(e.target.value);
    }
  };
  // console.log("form value is", formvalue);
  // console.log("tabledata value is ", tabledata);

  let userdata = IsSearch === true ? filterTableData : tabledata;
  console.log("userdata is...", userdata);
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
            onChange={(e) => handleOnChange(e)}
            name="firstname"
            value={formvalue?.firstname || ""}
          />
          <TextField
            helperText="Please enter your last name"
            id="demo-helper-text-aligned"
            label="Last Name"
            onChange={(e) => handleOnChange(e)}
            name="lastname"
            value={formvalue?.lastname || ""}
          />
        </Box>

        <FormLabel id="demo-radio-buttons-group-label">City</FormLabel>
        <FormControlLabel
          onChange={(e) => handleOnChange(e)}
          control={<Checkbox />}
          label="Surat"
          value="Surat"
          name="city"
          checked={formvalue?.city || ""}
        />
        <FormControlLabel
          onChange={(e) => handleOnChange(e)}
          control={<Checkbox />}
          label="Mumbai"
          // value="Mumbai"
          name="city2"
          checked={formvalue?.city2 || ""}
        />

        <FormControl>
          <FormLabel id="demo-radio-buttons-group-label">Gender</FormLabel>
          <RadioGroup
            aria-labelledby="demo-radio-buttons-group-label"
            defaultValue="female"
            name="radio-button-group"
          >
            <FormControlLabel
              onChange={(e) => handleOnChange(e)}
              value="female"
              control={<Radio />}
              label="Female"
              name="gender"
              checked={formvalue?.gender === "female" || false}
            />
            <FormControlLabel
              onChange={(e) => handleOnChange(e)}
              value="male"
              control={<Radio />}
              label="Male"
              name="gender"
              checked={formvalue?.gender === "male" || false}
            />
            <FormControlLabel
              onChange={(e) => handleOnChange(e)}
              value="other"
              control={<Radio />}
              label="Other"
              name="gender"
              checked={formvalue?.gender === "other" || false}
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
              onChange={(e) => handleOnChange(e)}
              name="email"
              value={formvalue?.email || ""}
            />
            <TextField
              type="password"
              id="outlined-basic"
              label="Password"
              variant="outlined"
              onChange={(e) => handleOnChange(e)}
              name="password"
              value={formvalue?.password || ""}
            />
          </Box>
        </FormControl>

        {IsEdit === false ? (
          <Stack spacing={2} direction="row">
            <Button variant="contained" onClick={(e) => handleSubmit(e)}>
              Submit
            </Button>
          </Stack>
        ) : (
          <Stack spacing={2} direction="row">
            <Button variant="contained" onClick={(e) => handleUpdate(e)}>
              Update
            </Button>
          </Stack>
        )}
      </FormGroup>
      <TextField
        type="text"
        id="outlined-basic"
        placeholder="Search"
        variant="outlined"
        value={searchvalue}
        onChange={(event) => handleSearch(event)}
        name="search"
      />

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
            {userdata?.length > 0
              ? userdata?.map((row, index) => (
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
                        <Button onClick={() => handleEdit(row)}>Edit</Button>
                        <Button onClick={() => handleDelete(row.id)}>
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
    </>
  );
}

export default Home;
