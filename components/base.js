import Footer from "./footer";
import NavBar from "./navbar";

const Base = ({ children }) => {
  return (
    <>
      <NavBar />
      {children}
      <Footer />
    </>
  );
};
export default Base;
