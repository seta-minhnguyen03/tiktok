import { HeaderOnly } from "../layouts";
import Following from "../pages/Following";
import Home from "../pages/Home";
import Profile from "../pages/Profile";
import Upload from "../pages/Upload";
import Search from "../pages/Search";
import config from "../config";

const publicRoutes = [
  {
    path: config.routes.home,
    component: Home,
  },
  {
    path: config.routes.following,
    component: Following,
  },
  {
    path: config.routes.profile,
    component: Profile,
  },
  {
    path: config.routes.search,
    component: Search,
  },
  {
    path: config.routes.explore,
    component: Search,
  },
  {
    path: config.routes.live,
    component: Search,
  },
  {
    path: config.routes.upload,
    component: Upload,
    layout: HeaderOnly,
  },
];
const privateRoutes = [];
export { publicRoutes, privateRoutes };
