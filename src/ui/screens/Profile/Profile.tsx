import { useSelector } from "react-redux";
import { RootState } from "../../../core";
import {
  ProfileCard,
  ProfileContainer,
  ProfileDate,
  ProfileName,
  ProfileSubtitle,
  ProfileTitle,
  ProfileUsername,
} from "./Profile.styles";

const Profile = () => {
  const user = useSelector((state: RootState) => state.user.user);

  if (!user) {
    return null;
  }

  return (
    <ProfileContainer>
      <ProfileTitle>
        my<span className="dot">•</span>
        <strong>profile</strong>
      </ProfileTitle>
      <ProfileSubtitle>see your information's</ProfileSubtitle>
      <ProfileCard>
        <ProfileName>{user.name}</ProfileName>
        <ProfileUsername>
          @{user.username} - {user.email}
        </ProfileUsername>
        <ProfileDate>
          user since {new Date(user.createdAt).toLocaleDateString()}
        </ProfileDate>
      </ProfileCard>
    </ProfileContainer>
  );
};

export { Profile };
