import {
  Add,
  DateRange,
  EmojiEmotions,
  Image,
  PersonAdd,
  VideoCameraBack,
} from "@mui/icons-material";
import {
  Avatar,
  Box,
  Fab,
  Modal,
  styled,
  TextField,
  Tooltip,
  Typography,
  Stack,
  ButtonGroup,
  Button,
} from "@mui/material";
import React from "react";
import user from "../img/me.jpeg";

const StyledModal = styled(Modal)({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
});

const StyledBox = styled(Box)({
  display: "flex",
  alignItems: "center",
  marginBottom: 20,
  gap: 15,
});

const AddPost = () => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <>
      <Tooltip
        title="Add New Post"
        sx={{
          position: "fixed",
          bottom: 20,
          left: { xs: "calc(50% - 25px)", md: 30 },
        }}
        onClick={handleOpen}
      >
        <Fab color="primary" aria-label="add">
          <Add />
        </Fab>
      </Tooltip>

      <StyledModal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box
          width={400}
          height={300}
          p={3}
          borderRadius={5}
          bgcolor={"background.default"}
          color={"text.primary"}
        >
          <Typography
            id="modal-modal-title"
            color="GrayText"
            variant="h6"
            textAlign="center"
          >
            Create a post
          </Typography>
          <StyledBox>
            <Avatar alt="Jhon Doe" src={user} sx={{ width: 25, height: 25 }} />
            <Typography variant="span">Jhon Doe</Typography>
          </StyledBox>

          <TextField
            id="standard-multiline-static"
            multiline
            rows={3}
            fullWidth
            placeholder="What's on your mind"
            variant="standard"
          />
          <Stack direction="row" spacing={2} my={2}>
            <EmojiEmotions color="primary" />
            <Image color="secondary" />
            <VideoCameraBack color="success" />
            <PersonAdd color="error" />
          </Stack>

          <ButtonGroup
            fullWidth
            variant="contained"
            aria-label="outlined primary button group"
          >
            <Button>Post</Button>
            <Button sx={{ width: "20%" }}>
              <DateRange />
            </Button>
          </ButtonGroup>
        </Box>
      </StyledModal>
    </>
  );
};

export default AddPost;
