import { createBrowserRouter } from "react-router";
import RootLayout from "./layouts/RootLayout";
import Home from "./pages/Home";
import Reducers from "./pages/Reducers";
import NotFound from "./pages/NotFound";
import Contexts from "./pages/Contexts";
import UseEffects from "./pages/UseEffects";
import UseState from "./pages/UseState";

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
      {
        path: "/use_effects",
        Component: UseEffects,
      },
      {
        path: "/use_states",
        Component: UseState,
      },
    ],
  },
  {
    path: "*",
    Component: NotFound,
  },
]);

export default router;
