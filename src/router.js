import { createBrowserRouter } from "react-router";
import RootLayout from "./layouts/RootLayout";
import Home from "./pages/Home";
import Reducers from "./pages/Reducers";
import NotFound from "./pages/NotFound";
import Contexts from "./pages/Contexts";

const router = createBrowserRouter([
  {
    path: "/",
    Component: RootLayout,
    children: [
      {
        index: true,
        Component: Home,
      },
      {
        path: "/reducers",
        Component: Reducers,
      },
      {
        path: "/contexts",
        Component: Contexts,
      },
    ],
  },
  {
    path: "*",
    Component: NotFound,
  },
]);

export default router;
