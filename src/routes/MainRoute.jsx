import { createBrowserRouter } from "react-router";
import MainLayout from "../layouts/MainLayout";
import HomePage from "../pages/home/Home";
import NotFound from "../pages/notFound/NotFound";
import StatsPage from "../pages/statsPage/Stats";
import TimeLinePage from "../pages/timeLinePage/TimeLine";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: MainLayout,
    children: [
      {
        index: true,
        Component: HomePage,
      },
      {
        path: "/timeline",
        Component: TimeLinePage,
      },
      {
        path: "/stats",
        Component: StatsPage,
      },
    ],
    errorElement: <NotFound></NotFound>,
  },
]);
