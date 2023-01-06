import Header from "../organisms/header/Header";
import Footer from "../organisms/footer/Footer";
import LogoAnchor from "../molecules/logo/LogoAnchor";
import logo from "assets/images/logo.png";

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <>
      <Header
        navItems={[
          { label: "Home", to: "/" },
          { label: "Courses", to: "/new-courses" },
          { label: "Registration", to: "/registration" },
        ]}
        logo={<LogoAnchor src={logo} />}
      />
      {children}
      <Footer />
    </>
  );
};

export default Layout;
