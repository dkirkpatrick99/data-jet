import HeaderLogo from "./headerLogo";

function SplashHeader() {

  return (
    <div className="min-h-14 pt-4 w-full flex items-center justify-between">
      <HeaderLogo route="/" />
    </div>
  )
}

export default SplashHeader;
