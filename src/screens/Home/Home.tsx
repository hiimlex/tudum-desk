import {
  HomeContainer,
  HomeSection,
  HomeSectionContent,
  HomeSectionTitle,
  HomeTitle,
} from "./Home.styles";

const Home = () => {
  return (
    <HomeContainer>
      <HomeTitle>My Space</HomeTitle>
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
