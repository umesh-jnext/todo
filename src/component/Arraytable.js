import * as React from "react";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { useState } from "react";
import _ from "lodash";
const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

const Arraytable = () => {
  const mockData = [
    {
      id: 1,
      name: "john wick",
      age: 25,
      mobile_number: 4556789455,
      gender: "male",
    },
    {
      id: 2,
      name: "wonder women",
      age: 19,
      mobile_number: 4556789455,
      gender: "female",
    },
    {
      id: 3,
      name: "captain america",
      age: 50,
      mobile_number: 4556789455,
      gender: "male",
    },
    {
      id: 4,
      name: "iron man",
      age: 30,
      mobile_number: 4575989455,
      gender: "male",
    },
    {
      id: 5,
      name: "black panther",
      age: 23,
      mobile_number: 4551289455,
      gender: "male",
    },
    {
      id: 6,
      name: "hulk",
      age: 27,
      mobile_number: 4785689455,
      gender: "male",
    },
    {
      id: 7,
      name: "spider man",
      age: 15,
      mobile_number: 4556789455,
      gender: "male",
    },
    {
      id: 8,
      name: "flash",
      age: 18,
      mobile_number: 4556789455,
      gender: "male",
    },
    {
      id: 9,
      name: "black widow",
      age: 26,
      mobile_number: 4556789455,
      gender: "female",
    },
    {
      id: 10,
      name: "tony stark",
      age: 21,
      mobile_number: 4556789455,
      gender: "male",
    },
  ];
  const [tabledata, setTabledata] = useState(mockData);
  // let grouped_data = _.groupBy(mockData, "gender");
  // const maleData = grouped_data.male;
  // const femaleData = grouped_data.female;
  const maleData = _.filter(mockData, (user) => user.gender === "male");
  const femaleData = _.filter(mockData, (user) => user.gender === "female");
  console.log("male data is", maleData);
  console.log("female data is", femaleData);
  const [gender, setGender] = useState("all");

  const handleSort = (e) => {
    setGender(e.target.value);
    if (e.target.value === "male") {
      setTabledata(maleData);
    } else if (e.target.value === "female") {
      setTabledata(femaleData);
    } else {
      setTabledata(mockData);
    }
  };
  const handleChange = (e, row, type) => {
    let user = tabledata.map((user) => {
      if (user.id === row.id) {
        if (type === "name") {
          user.name = e.target.value;
        } else if (type === "age") {
          user.age = e.target.value;
        } else if (type === "mobile_number") {
          user.mobile_number = e.target.value;
        } else if (type === "gender") {
          user.gender = e.target.value;
        }
      }
      return user;
    });
    setTabledata(user);
    console.log("user is", user);
  };

  console.log("tabledata is ", tabledata);

  const albums = [
    {
      artist: "Pearl Jam",
      album: "Ten",
      year: "1991",
    },
    {
      artist: "Pearl Jam",
      album: "Yield",
      year: "1998",
    },
    {
      artist: "Soundgarden",
      album: "Badmotorfinger",
      year: "1991",
    },
    {
      artist: "Soundgarden",
      album: "Superunknown",
      year: "1994",
    },
  ];

  // -------- 1st Method ---------- //

  const groupByCategory = albums.reduce((Group, album) => {
    const { year } = album;
    Group[year] = Group[year] ?? [];
    Group[year].push(album);
    return Group;
  }, {});
  console.log("albums", JSON.stringify(groupByCategory, null, 2));

  const DestinationGuide = [
    {
      guideName: "Destination Guide",
      guideType: "Need to Know - All Country",
      viewUrl:
        "https://erpdev.i-rms.online/API/Guide/DestinationGuideShow.aspx?ItemNo=202010130157186736020170132654919227&origin=https://customerdev.i-rms.online",
    },
    {
      guideName: "Destination Guide",
      guideType: "Local Area - All Country",
      viewUrl:
        "https://erpdev.i-rms.online/API/Guide/DestinationGuideShow.aspx?ItemNo=202010130157186773512736321434305185&origin=https://customerdev.i-rms.online",
    },
    {
      guideName: "Destination Guide",
      guideType: "Need to Know",
      viewUrl:
        "https://erpdev.i-rms.online/API/Guide/DestinationGuideShow.aspx?ItemNo=202010130157186733846174230304279249&origin=https://customerdev.i-rms.online",
    },
    {
      guideName: "Destination Guide",
      guideType: "Local Area",
      viewUrl:
        "https://erpdev.i-rms.online/API/Guide/DestinationGuideShow.aspx?ItemNo=202010130157186805590614564324393991&origin=https://customerdev.i-rms.online",
    },
    {
      guideName: "Destination Guide",
      guideType: "Useful Links",
      viewUrl:
        "https://erpdev.i-rms.online/API/Guide/DestinationGuideShow.aspx?ItemNo=202010130157186832129011251534523903&origin=https://customerdev.i-rms.online",
    },
    {
      guideName: "Destination Guide",
      guideType: "Useful Links - All Country",
      viewUrl:
        "https://erpdev.i-rms.online/API/Guide/DestinationGuideShow.aspx?ItemNo=202010130157186802543125347384428126&origin=https://customerdev.i-rms.online",
    },
    {
      guideName: "Destination Guide",
      guideType: "Preparing For Your Move",
      viewUrl:
        "https://erpdev.i-rms.online/API/Guide/DestinationGuideShow.aspx?ItemNo=&origin=https://customerdev.i-rms.online",
    },
    {
      guideName: "Destination Guide",
      guideType: " MOVING DAY",
      viewUrl:
        "https://erpdev.i-rms.online/API/Guide/DestinationGuideShow.aspx?ItemNo=202012160659082634645354561314060115&origin=https://customerdev.i-rms.online",
    },
    {
      guideName: "Destination Guide",
      guideType: "Useful APPS",
      viewUrl:
        "https://erpdev.i-rms.online/API/Guide/DestinationGuideShow.aspx?ItemNo=202010130157186808470954165524112853&origin=https://customerdev.i-rms.online",
    },
    {
      guideName: "Destination Guide",
      guideType: "Useful APPS - All Country",
      viewUrl:
        "https://erpdev.i-rms.online/API/Guide/DestinationGuideShow.aspx?ItemNo=202010130157186807333834893024914143&origin=https://customerdev.i-rms.online",
    },
  ];

  const DepartureGuide = [
    {
      guideName: "Departure  Guide",
      guideType: "Departure Guide",
      viewUrl:
        "https://customerdev-api.i-rms.online/api/v1.0/FileProcess/Download?FileType=DepartureGuidePDF&pkeyNo=202204260903054031460591752534351253&otherNo=&newFileName=440a9591-2913-4093-8df2-c12e11055cfd.pdf_security.zip&downloadName=Silk+Relo+-+Destination+Guide+-+Singapore+2020.pdf",
    },
    {
      guideName: "Departure  Guide",
      guideType: "Need To Know",
      viewUrl:
        "https://erpdev.i-rms.online/API/Guide/DepartureGuideShow.aspx?ItemNo=202205300655504472386281437384925132&origin=https://customerdev.i-rms.online",
    },
  ];

  let newarray = [...DestinationGuide, ...DepartureGuide];
  console.log("newarray", newarray);
  // const groupBy = newarray.reduce((result, currentValue) => {
  //   (result[currentValue?.guideName] =
  //     result[currentValue?.guideName] || []).push(currentValue);
  //   console.log("result", result);
  //   return result;
  // }, []);
  const groupBy = _.groupBy(newarray, "guideName");
  const groupdata = Object.keys(groupBy).map((name) => (
    <span key={name}>
      {name}
      {groupBy[name]}
    </span>
  ));
  console.log("groupdata", groupdata);
  console.log("groupby data is", groupBy[0]);

  return (
    <>
      <div className="sort-box">
        <span> Sort By Gender : </span>
        <Box sx={{ maxWidth: 150 }}>
          <FormControl fullWidth>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={gender}
              onChange={(e) => handleSort(e)}
              sx={{ height: 40, ml: 2 }}
            >
              <MenuItem value="all">All</MenuItem>
              <MenuItem value="male">Male</MenuItem>
              <MenuItem value="female">Female</MenuItem>
            </Select>
          </FormControl>
        </Box>
      </div>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 700 }} aria-label="customized table">
          <TableHead>
            <TableRow>
              <StyledTableCell align="center"> ID </StyledTableCell>
              <StyledTableCell align="center">Name</StyledTableCell>
              <StyledTableCell align="center">Age</StyledTableCell>
              <StyledTableCell align="center">Mobile Number</StyledTableCell>
              <StyledTableCell align="center"> Gender</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {tabledata.map((row) => (
              <StyledTableRow key={row.id}>
                <StyledTableCell component="th" scope="row" align="center">
                  {row.id}
                </StyledTableCell>
                <StyledTableCell align="center">
                  <Box>
                    <TextField
                      id="standard-basic"
                      value={row.name}
                      variant="outlined"
                      name="name"
                      onChange={(e) => handleChange(e, row, "name")}
                    />
                  </Box>
                </StyledTableCell>
                <StyledTableCell align="center">
                  <TextField
                    id="standard-basic"
                    value={row.age}
                    variant="outlined"
                    name="age"
                    onChange={(e) => handleChange(e, row, "age")}
                  />
                </StyledTableCell>
                <StyledTableCell align="center">
                  <TextField
                    id="standard-basic"
                    value={row.mobile_number}
                    variant="outlined"
                    name="mobile_number"
                    onChange={(e) => handleChange(e, row, "mobile_number")}
                  />
                </StyledTableCell>
                <StyledTableCell align="center">
                  <Box sx={{ maxWidth: 120 }}>
                    <FormControl fullWidth>
                      <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={row.gender}
                        name="gender"
                        onChange={(e) => handleChange(e, row, "gender")}
                      >
                        <MenuItem value="male">Male</MenuItem>
                        <MenuItem value="female">Female</MenuItem>
                      </Select>
                    </FormControl>
                  </Box>
                </StyledTableCell>
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <p> Hello</p>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 700 }} aria-label="customized table">
          <TableHead>
            <StyledTableRow>
              <StyledTableCell>GUIDE TYPE</StyledTableCell>
              <StyledTableCell align="right">ACTION</StyledTableCell>
            </StyledTableRow>
          </TableHead>
          <TableBody>
            {groupdata.map((element) => (
              <>
                <StyledTableRow key={element.props.children[0]}>
                  <StyledTableCell
                    component="th"
                    colSpan={2}
                    className="table-heading"
                    sx={{
                      mt: 10,
                    }}
                    scope="row"
                  >
                    {element.props.children[0]}
                  </StyledTableCell>
                </StyledTableRow>
                {element.props.children[1].map((row) => (
                  <StyledTableRow key={row.viewUrl}>
                    <StyledTableCell component="th" scope="row">
                      {row.guideType}
                    </StyledTableCell>
                    <StyledTableCell align="right">
                      <a href={row.viewUrl}>View</a>
                    </StyledTableCell>
                  </StyledTableRow>
                ))}
              </>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
};

export default Arraytable;
