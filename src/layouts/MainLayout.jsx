import { Outlet } from "react-router";
import { ToastContainer } from "react-toastify";
import Footer from "../components/shared/footer/Footer";
import NavBar from "../components/shared/navbar/NavBar";

const MainLayout = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <NavBar />
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer />

      {/* React Toast main container */}
      <ToastContainer />
    </div>
  );
};

export default MainLayout;
