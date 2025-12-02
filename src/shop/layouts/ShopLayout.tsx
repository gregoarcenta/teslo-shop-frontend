import { Outlet } from "react-router";
import { CustomHeader } from "../components/CustomHeader";
import { CustomFooter } from "../components/CustomFooter";

export const ShopLayout = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <CustomHeader />
      <main className="flex-1 inline-block">
        <Outlet />
      </main>
      <CustomFooter />
    </div>
  );
};
