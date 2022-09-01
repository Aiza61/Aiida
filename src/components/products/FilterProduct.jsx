import * as React from "react";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import { useProducts } from "../../context/ProductContextProvider";

export default function ControlledRadioButtonsGroup() {
  const { fetchByParams } = useProducts();

  return (
    <FormControl>
      <FormLabel id="demo-controlled-radio-buttons-group">Category</FormLabel>
      <RadioGroup
        aria-labelledby="demo-controlled-radio-buttons-group"
        defaultValue="all"
        name="controlled-radio-buttons-group"
        onChange={(e) => fetchByParams("type", e.target.value)}
      >
        <FormControlLabel value="all" control={<Radio />} label="All" />
        <FormControlLabel value="sport" control={<Radio />} label="Sport" />
        <FormControlLabel value="clothes" control={<Radio />} label="Clothes" />
        <FormControlLabel
          value="electronics"
          control={<Radio />}
          label="Electronics"
        />
      </RadioGroup>
    </FormControl>
  );
}
