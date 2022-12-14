import React from "react";
import { Container, Button, styled } from "@mui/material";
import { AddBox, AttachEmail } from "@mui/icons-material";

const CustomButton = styled(Button)(({ theme }) => ({
  margin: "10px",
  backgroundColor: theme.palette.primary.main,
  color: "black",
}));

const PracticeFour = () => {
  return (
    <Container maxWidth="lg">
      <div>
        <Button variant="contained">1</Button>
        <Button variant="outlined">2</Button>
        <Button variant="contained" sx={{ color: "black", margin: "5px" }}>
          3
        </Button>
        <Button variant="outlined" color="secondary">
          4
        </Button>
        <CustomButton
          endIcon={<AttachEmail />}
          variant="outlined"
          color="secondary"
        >
          4
        </CustomButton>

        <CustomButton startIcon={<AddBox></AddBox>} variant="contained">
          5
        </CustomButton>
      </div>
    </Container>
  );
};

export default PracticeFour;
