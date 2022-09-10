import { React, useState } from "react";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import FormLabel from "@mui/material/FormLabel";

const Multiplevaluecheckbox = () => {
  const mockdata = [
    { id: 1, name: "banana" },
    { id: 2, name: "apple" },
    { id: 3, name: "mango" },
    { id: 4, name: "grap" },
    { id: 5, name: "chikoo" },
    { id: 6, name: "pineapple" },
    { id: 7, name: "evakado" },
    { id: 8, name: "strawbarry" },
    { id: 9, name: "watermalon" },
    { id: 10, name: "raspbarry" },
    { id: 11, name: "bluebarry" },
    { id: 12, name: "cherry" },
    { id: 13, name: "date" },
    { id: 14, name: "dragon fruit" },
  ];
  const [checkboxValue, setcheckboxValue] = useState([]);
  const handleOnChange = (e) => {
    const { value, checked } = e.target;
    if (checked === true) {
      let checkboxdata = [...checkboxValue, value];
      setcheckboxValue(checkboxdata);
    } else {
      let checkboxdata = checkboxValue.filter((element) => element !== value);
      setcheckboxValue(checkboxdata);
    }
  };
  console.log(checkboxValue);
  return (
    <>
      <FormLabel id="demo-radio-buttons-group-label">Fruits</FormLabel>
      {mockdata.map((element) => (
        <FormControlLabel
          key={element.id}
          onChange={(e) => handleOnChange(e)}
          control={<Checkbox />}
          label={element?.name}
          value={element?.name}
          name="fruits"
          // checked={formvalue?.city || ""}
        />
      ))}
    </>
  );
};

export default Multiplevaluecheckbox;
