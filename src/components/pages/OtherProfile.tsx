import { FC } from "react";
import OtherProfileHero from "./ProfileSection/OtherProfileHero";
import ProfilePosts from "./ProfileSection/ProfilePosts";

const OtherProfile: FC = () => {
  return (
    <>
      <OtherProfileHero />
      <ProfilePosts />
    </>
  );
};

export default OtherProfile;
