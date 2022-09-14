import * as React from "react";
import "../../App.scss";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";

export default function IconLabelButtons({ title, icon, spacing }) {
  return (
    <Stack direction="column" spacing={spacing}>
      <Button className="button" variant="outlined" startIcon={icon}>
        {title}
      </Button>
    </Stack>
  );
}
