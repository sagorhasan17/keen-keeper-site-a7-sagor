import { Outlet } from "react-router";
import Footer from "../components/shared/footer/Footer";
import NavBar from "../components/shared/navbar/NavBar";

const MainLayout = () => {
  return (
    <>
      <NavBar></NavBar>
      <Outlet></Outlet>
      <Footer></Footer>
    </>
  );
};

export default MainLayout;
