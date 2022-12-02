import Home from "./pages/Home";
import SinglePost from "./pages/SinglePost";

const routes = [
  {
    path: "/:currentLang",
    exact: true,
    component: Home,
  },

  {
    path: "/:currentLang/post/:PostId",
    exact: true,
    component: SinglePost,
  },
];
export default routes;
