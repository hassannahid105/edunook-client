import { Outlet } from "react-router-dom";
import Navbar from "../component/Navbar/Navbar";
import Footer from "../component/Footer/Footer";

const MainLayout = () => {
  return (
    <div className="h-full font-lato">
      <div className="h-24">
        <Navbar></Navbar>
      </div>
      <div className="h-[calc-(100%-64px)]">
        <Outlet></Outlet>
      </div>
      <Footer></Footer>
      <div className="mb-[600px] text-center mt-[100px]">remove last</div>
    </div>
  );
};

export default MainLayout;
