import { RouterProvider } from "react-router";
import { appRouter } from "./app.router";

export const TesloShopApp = () => {
  return <RouterProvider router={appRouter} />;
};
