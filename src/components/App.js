import { FlexContainer, Body } from "./App.styled";
import Header from "./header/header";
import Projects from "./projects/projects";
import Menu from "./menu/menu";
import Contact from "./contact/contact";
import Footer from "./footer/footer";

const App = () => {
  return (
    <>
      <FlexContainer>
        <Body />
        <Menu />
        <Header />
        <Projects />
        <Contact />
      </FlexContainer>
      <Footer />
    </>
  );
};

export default App;
