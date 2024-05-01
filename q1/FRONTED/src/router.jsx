//prettier-ignore
import {Route, createBrowserRouter, createRoutesFromElements} from "react-router-dom"
import Root from "./pages/root";
import ErrorPage from "./pages/error-page";
import Home from "./pages/home";
import AddWilling from "./pages/add-willing";
import Willing from "./pages/willing";
import All from "./pages/all";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Root />} errorElement={<ErrorPage />}>
      <Route index element={<Home />} />
      <Route path="AddWilling" element={<AddWilling />} />
      <Route path="willing" element={<Willing />}>
        <Route path="all" element={<All />} />
      </Route>
    </Route>
  )
);

export default router;
