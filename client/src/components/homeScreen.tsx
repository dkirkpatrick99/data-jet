import UrlSearchBar from "./search/urlSearchBar";
import DataCardList from "./home/dataCardList";
import ExportCustomToolbar from "./tables/dataTable";
import WebPortal from "./home/webPortal";
import LoadingSpinnerModal from "./modals/loadingSpinnerModal";
import SetSelectorFormModal from "./modals/setSelectorFormModal";
import { AppContextProvider } from "../context/appContextProvider";
import CreateSelectorFormModal from "./modals/createSelectorFormModal";


function HomeScreen() {

  return (
    <AppContextProvider>
      <>
        <div className="h-8" />
        <UrlSearchBar />

        <div className="h-8" />
        <div className="md:flex justify-between h-full">
          <WebPortal />

          <DataCardList />
        </div>

        <div className="h-12" />
        <ExportCustomToolbar/>

        <SetSelectorFormModal />
        <LoadingSpinnerModal />
        <CreateSelectorFormModal />
      </>
    </AppContextProvider>
  )
};

export default HomeScreen;













































// var styleSheets = contentDoc.querySelectorAll("link");

// for (var i = 0; i < styleSheets.length; i++) {
//   if (styleSheets[i].rel === "stylesheet" && styleSheets[i].href) {
//     fetch(styleSheets[i].href).then(function (data) {
//       console.log("Fetch StyleSheet: ")
//       data.text().then(function (css) {
//         console.log("FETCHED CSS: ", css)

//         const el = document.createElement('style')
//         el.textContent = css
//         contentDoc.appendChild(el)
//       })
//     });

//   }
//   // To not repeat the element
//   if (styleSheets[i] && styleSheets[i]?.parentNode) {
//     styleSheets[i]?.parentNode?.removeChild(styleSheets[i]);
//   }
// }