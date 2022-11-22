import {
  HomeContainer,
  HomeSection,
  HomeSectionContent,
  HomeSectionTitle,
  HomeSubtitle,
  HomeTitle,
} from "./Home.styles";

const Home = () => {
  return (
    <HomeContainer>
      <HomeTitle>My Space</HomeTitle>
      <HomeSubtitle>
        Welcome to the Tu•<strong>dum</strong> app, here you can organize your
        ideas easily.
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
