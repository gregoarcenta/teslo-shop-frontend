import { lazy } from "react";
import { createBrowserRouter, Navigate } from "react-router";
import { ShopLayout } from "./shop/layouts/ShopLayout";
import { HomePage } from "./shop/pages/home/HomePage";
import { ProductPage } from "./shop/pages/product/ProductPage";
import DashboardPage from "./admin/pages/dashboard/DashboardPage";
import ProductsPage from "./shop/pages/products/ProductsPage";
import CartPage from "./shop/pages/cart/CartPage";
import FavoritesPage from "./shop/pages/favorites/FavoritesPage";
import ProfilePage from "./shop/pages/profile/ProfilePage";
import { LoginPage } from "./auth/pages/login/LoginPage";
import RegisterPage from "./auth/pages/register/RegisterPage";
import { AdminProductsPage } from "./admin/pages/products/AdminProductsPage";
import { AdminProductPage } from "./admin/pages/product/AdminProductPage";
import NotFound from "./shop/pages/404/NotFound";

const AuthLayout = lazy(() => import("./auth/layouts/AuthLayout"));
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
        path: "products",
        element: <ProductsPage />
      },
      {
        path: "products/:idSlug",
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
        path: "*",
        element: <NotFound />
      }
    ]
  },
  // Auth routes
  {
    path: "/auth",
    element: <AuthLayout />,
    children: [
      {
        index: true,
        element: <Navigate to="/auth/login" />
      },
      {
        path: "login",
        element: <LoginPage />
      },
      {
        path: "register",
        element: <RegisterPage />
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
        path: "prodducts/:id",
        element: <AdminProductPage />
      }
    ]
  }
]);
