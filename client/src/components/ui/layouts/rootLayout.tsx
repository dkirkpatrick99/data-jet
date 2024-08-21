import { Outlet } from "react-router-dom";
import Footer from "../../footer/footer";

function RootLayout() {

  return (
    <>
      <Outlet/>
      <Footer/>
    </>
  )
};

export default RootLayout;
