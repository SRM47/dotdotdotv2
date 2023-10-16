import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ErrorPage from "./pages/error";
import Home from "./pages/home";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <ErrorPage />,
  },
//   {
//     path: "/play/:roomId?",
//     element: <Room />,
//     errorElement: <ErrorPage />,
//   },
]);

const Router = () => {
  return <RouterProvider router={router} />;
};

export default Router;
