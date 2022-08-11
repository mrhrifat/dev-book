import React from "react";
import { Container, Button, styled } from "@mui/material";

const CustomButton = styled(Button)({
  margin: "10px",
  backgroundColor: "rosybrown",
  color: "black",
});

const PracticeThree = () => {
  return (
    <Container maxWidth="lg">
      <div>
        <Button variant="contained">Click Me</Button>
        <Button variant="outlined">Click Me</Button>
        <Button variant="contained" sx={{ color: "black", margin: "5px" }}>
          Click Me
        </Button>
        <Button variant="outlined" color="secondary">
          Click Me
        </Button>
      </div>
      <div>
        <Button variant="contained">1</Button>
        <Button variant="outlined">2</Button>
        <Button variant="contained" sx={{ color: "black", margin: "5px" }}>
          3
        </Button>
        <Button variant="outlined" color="secondary">
          4
        </Button>
        <CustomButton variant="outlined" color="secondary">
          4
        </CustomButton>

        <CustomButton variant="contained">5</CustomButton>
      </div>
    </Container>
  );
};

export default PracticeThree;
