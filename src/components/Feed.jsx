import React from "react";
import { Box } from "@mui/material";
import Posts from "./Posts";
const Feed = () => {
  return (
    <Box flex={4} p={2}>
      <Posts
        username="Geek Pro"
        image="https://images.pexels.com/photos/6045232/pexels-photo-6045232.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        date="10 Jan 22"
        content="lorem ispum dolor sit amet to me this week we will learn mui"
      />
      <Posts
        username="Mahbub"
        image="https://images.pexels.com/photos/3244513/pexels-photo-3244513.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        date="10 Jan 22"
        content="lorem ispum dolor sit amet to me this week we will learn mui"
      />
      <Posts
        username="Rifat"
        image="https://images.pexels.com/photos/2422915/pexels-photo-2422915.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        date="04 Aug 22"
        content="lorem ispum dolor sit amet to me this week we will learn mui"
      />
      <Posts
        username="Hossen"
        image="https://images.pexels.com/photos/1329711/pexels-photo-1329711.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        date="24 June 22"
        content="lorem ispum dolor sit amet to me this week we will learn mui"
      />
      <Posts
        username="Nirob"
        image="https://images.pexels.com/photos/4840134/pexels-photo-4840134.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load"
        date="01 May 22"
        content="lorem ispum dolor sit amet to me this week we will learn mui"
      />
      <Posts
        username="Humayra"
        image="https://images.pexels.com/photos/3183198/pexels-photo-3183198.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load"
        date="31 Jan 22"
        content="lorem ispum dolor sit amet to me this week we will learn mui"
      />
    </Box>
  );
};

export default Feed;
