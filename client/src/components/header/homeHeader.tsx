import HeaderLogo from "./headerLogo";

function HomeHeader() {

  return (
    <div className="text-black w-full sm:flex mt-4 items-end justify-between">
      <HeaderLogo route="/home" />
    </div>
  )
};

export default HomeHeader;