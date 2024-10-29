import { Outlet } from "react-router-dom";
import Navbar from "../component/Navbar/Navbar";

const MainLayout = () => {
  return (
    <div className="container mx-auto pt-4">
      <Navbar></Navbar>
      <Outlet></Outlet>
      <h2>footer</h2>
      <div className="mb-[600px] text-center mt-[100px]">remove last</div>
    </div>
  );
};

export default MainLayout;
