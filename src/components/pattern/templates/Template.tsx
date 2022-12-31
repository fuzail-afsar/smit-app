import Header from "../organism/header/Header";
import Footer from "../organism/footer/Footer";
import LogoAnchor from "../molecules/logo-anchor/LogoAnchor";

const Template: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <>
      <Header
        navItems={["Home", "Courses", "Register"]}
        logo={<LogoAnchor />}
      />
      {children}
      <Footer />
    </>
  );
};

export default Template;
