import { Box, Heading, Text } from "@chakra-ui/react";
import React from "react";
import { useSelector } from "react-redux";
import styles from "../Styled/profile.module.css";

const Profile = () => {
  const { name, mobile, image, username } = useSelector((state) => state);

  return (
    <Box>
      <Heading mb={'10'} size={"lg"}>User Profile</Heading>
      <Box className={styles.container}>
        <Heading size={"md"}>Name : {name}</Heading>

        <Text>Username : {username}</Text>

        <Text>Mobile : {mobile}</Text>

        <img
          className={styles.image}
          src="https://www.pngitem.com/pimgs/m/146-1468479_my-profile-icon-blank-profile-picture-circle-hd.png"
          alt="profile pic"
        />
      </Box>
      
    </Box>
  );
};

export default Profile;
