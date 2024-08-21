import { RouterProvider } from "react-router-dom";
import { appRouter } from "./navigation/appRoutes";

function App() {

  return (
    <>
      <RouterProvider router={appRouter} />
    </>
  )
};

export default App;
