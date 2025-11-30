import { RouterProvider } from "react-router";
import { appRouter } from "./app.router";
import { Toaster } from "sonner";

export const TesloShopApp = () => {
  return (
    <>
      <RouterProvider router={appRouter} />
      <Toaster />
    </>
  );
};
