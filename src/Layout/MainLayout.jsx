import { Outlet } from "react-router-dom";
import Navbar from "../component/Navbar/Navbar";
import Footer from "../component/Footer/Footer";

const MainLayout = () => {
  return (
    <div className="container mx-auto pt-4">
      <Navbar></Navbar>
      <Outlet></Outlet>
      <Footer></Footer>
      <div className="mb-[600px] text-center mt-[100px]">remove last</div>
    </div>
  );
};

export default MainLayout;
