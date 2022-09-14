import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";

export default function BasicTextFields({ title }) {
  return (
    <Box
      component="form"
      sx={{
        "& > :not(style)": { my: 1, width: "40ch" },
      }}
      noValidate
      autoComplete="off"
    >
      <TextField
        className="basic-input"
        id="standard-basic"
        label={title}
        variant="standard"
      />
    </Box>
  );
}
