import { lazy } from "react";
import { createBrowserRouter } from "react-router";
import { ShopLayout } from "./shop/layouts/ShopLayout";
import { HomePage } from "./shop/pages/home/HomePage";
import { ProductPage } from "./shop/pages/product/ProductPage";
import { DashboardPage } from "./admin/pages/dashboard/DashboardPage";
import { ProductsPage } from "./shop/pages/products/ProductsPage";
import { CartPage } from "./shop/pages/cart/CartPage";
import { FavoritesPage } from "./shop/pages/favorites/FavoritesPage";
import { ProfilePage } from "./shop/pages/profile/ProfilePage";
import { AuthPage } from "./auth/pages/auth/AuthPage";
import { AdminProductsPage } from "./admin/pages/products/AdminProductsPage";
import { AdminProductPage } from "./admin/pages/product/AdminProductPage";
import { NotFound } from "./shop/pages/404/NotFound";
import { AdminNotFound } from "./admin/pages/404/AdminNotFound";
import { ThankYouPage } from "./shop/pages/thanks/ThankYou";

const AdminLayout = lazy(() => import("./admin/layout/AdminLayout"));

export const appRouter = createBrowserRouter([
  // Public routes
  {
    path: "/",
    element: <ShopLayout />,
    children: [
      {
        index: true,
        element: <HomePage />
      },
      {
        path: "/auth",
        element: <AuthPage />
      },
      {
        path: "products",
        element: <ProductsPage />
      },
      {
        path: "products/:gender",
        element: <ProductsPage />
      },
      {
        path: "product/:idSlug",
        element: <ProductPage />
      },
      {
        path: "cart",
        element: <CartPage />
      },
      {
        path: "favorites",
        element: <FavoritesPage />
      },
      {
        path: "profile",
        element: <ProfilePage />
      },
      {
        path: "thanks",
        element: <ThankYouPage />
      },
      {
        path: "*",
        element: <NotFound />
      }
    ]
  },
  // Admin routes
  {
    path: "/admin",
    element: <AdminLayout />,
    children: [
      {
        index: true,
        element: <DashboardPage />
      },
      {
        path: "products",
        element: <AdminProductsPage />
      },
      {
        path: "products/:id",
        element: <AdminProductPage />
      },
      {
        path: "*",
        element: <AdminNotFound />
      }
    ]
  }
]);
