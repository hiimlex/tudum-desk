import { useSelector } from "react-redux";
import { RootState } from "../../../core";
import {
  HomeContainer,
  HomeSection,
  HomeSectionContent,
  HomeSectionTitle,
  HomeSubtitle,
  HomeTitle,
} from "./Home.styles";

const Home = () => {
  const user = useSelector((state: RootState) => state.user.user);

  return (
    <HomeContainer>
      <HomeTitle>Welcome {user && user.name}</HomeTitle>
      <HomeSubtitle>
        See your recent's notes and tasks, and create new ones.
      </HomeSubtitle>
      <HomeSection>
        <HomeSectionTitle>Pinned</HomeSectionTitle>
        <HomeSectionContent></HomeSectionContent>
      </HomeSection>
      <HomeSection>
        <HomeSectionTitle>Recent</HomeSectionTitle>
        <HomeSectionContent></HomeSectionContent>
      </HomeSection>
    </HomeContainer>
  );
};

export { Home };
