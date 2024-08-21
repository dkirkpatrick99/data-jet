import RadialGradient from "./ui/radialGradient"
import SplashIntro from "./splash/splashIntro";
import SplashTagLine from "./splash/splashTagline";
import SplashHeader from "./header/splashHeader";

function SplashScreen() {
  return (
    <>
      <div className="bg-[#010E19] pb-24 px-2 lg:px-0">
        <div className="m-auto max-w-[1680px]">
          <SplashHeader />

          <div className="h-10" />

          <RadialGradient>
            <div className="lg:flex items-center justify-around">
              <SplashIntro />
              {/* <PhotoGrid /> */}
            </div>
          </RadialGradient>

          <div className="h-10" />

          <SplashTagLine
            headText="We've got what everyone is looking for"
            subText="From Clicks to Code: Transforming Data Harvesting."
          />

          <div className="h-24" />

          {/* <BookSlider books={BooksState.books} search={[Category.Mystery, Category.Horror]} /> */}

          <div className="h-24" />

          <SplashTagLine
            headText="New adventures around every corner"
            subText="Thousands of titles by authors from around the world."
          />

          <div className="h-24" />

          {/* <BookSlider books={BooksState.books} title="Trending now" /> */}
        </div>
      </div>
    </>
  )
};

export default SplashScreen;
