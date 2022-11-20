import { avatarClasses } from "@mui/material";
import Box from "@mui/material/Box";
import React from "react";
import { useAppSelector } from "../hooks/appHook";

const Profile = () => {
  const { profileList } = useAppSelector((state) => state.profileReducer);

  return (
    <Box className="profile_container">
      {profileList.map((profilepics) => (
        <div key={profilepics.id}>
          <img
            className="image_product"
            src={profilepics.avatar[0]}
            alt="avatar"
          />
          <div>{profilepics.id}</div>
          <div> {profilepics.name}</div>
          <div> {profilepics.email}</div>
        </div>
      ))}
    </Box>
  );
};

export default Profile;
