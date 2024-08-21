import { Outlet } from "react-router-dom";
import HomeHeader from "../../header/homeHeader";

function LoggedInLayout() {
  return (
    <>
      <div className="bg-white text-black pb-24 mx-2 ">
        <div className="m-auto max-w-[1680px]">
          <HomeHeader />
          
          <Outlet/>
        </div>
      </div>
    </>
  )
};

export default LoggedInLayout;
