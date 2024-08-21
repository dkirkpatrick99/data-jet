import { createBrowserRouter, createRoutesFromElements, Route } from "react-router-dom";
import SplashScreen from "../components/splashScreen";
import ErrorPage from "./errorPage";
import HomeScreen from "../components/homeScreen";
import RootLayout from "../components/ui/layouts/rootLayout";
import LoggedInLayout from "../components/ui/layouts/loggedInLayout";

// Nested Routing via React Router Dom
export const appRouter = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />} errorElement={<ErrorPage />} >
      <Route path="/" element={<SplashScreen />} />

      <Route element={<LoggedInLayout />}>
        <Route 
          path="home" 
          element={<HomeScreen />} 
        />
      </Route>
    </Route>
  )
);