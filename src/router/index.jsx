import { createHashRouter } from "react-router-dom";
// import User from "../pages/User";
import Home from "../pages/Home";

const router = createHashRouter([
  {
    path: "/",
    Component: Home,
  },
  // {
  //   path: "/User",
  //   Component: User,
  // },
  {
    path: "/Home",
    Component: Home,
  },
]);

export default router;