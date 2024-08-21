import { Link } from "react-router-dom";
import SignupButton from "../ui/actionButton";

function SplashIntro() {

  return (
    <div className="text-white text-center items-center flex flex-col justify-center lg:w-[36%] xl:w-[40%]">
      <h1 className="text-6xl font-bold mb-1">Extract Insights</h1>
      <h1 className="text-6xl font-bold mb-8">Unlock Potential</h1>
      <h2 className="text-2xl font-medium mb-10">DataJet™ makes it easy to Gather, Analyze, Succeed. Your Data, Your Way.</h2>

      <div className="h-10" />
      <Link to={"home"}>
        <SignupButton text="Go Now!" />
      </Link>
    </div>
  )
};

export default SplashIntro;
