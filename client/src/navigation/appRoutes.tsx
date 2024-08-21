import { createBrowserRouter, createRoutesFromElements, redirect, Route } from "react-router-dom";
import SplashScreen from "../components/splashScreen";
import ErrorPage from "./errorPage";
import HomeScreen from "../components/homeScreen";
import RootLayout from "../components/ui/layouts/rootLayout";
import LoggedInLayout from "../components/ui/layouts/loggedInLayout";

export const validateUserRoute = (userId: string) => {
  if (userId.length <= 1) {
    return redirect("/");
  }
  return null;
};

export const redirectIfUser = (userId: string) => {
  if (userId.length > 1) {
    return redirect("/home");
  }
  return null;
};

// Nested Routing  via React Router Dom
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