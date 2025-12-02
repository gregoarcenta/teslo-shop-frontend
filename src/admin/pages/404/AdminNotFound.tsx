import { Link } from "react-router";

export const AdminNotFound = () => {
  return (
    <div className="flex min-h-full items-center justify-center">
      <div className="text-center">
        <h1 className="mb-4 text-4xl font-bold">404</h1>
        <p className="mb-4 text-xl text-gray-600">Oops! Page not found</p>
        <Link
          to="/admin"
          className="text-blue-500 underline hover:text-blue-700"
        >
          Return to Dashboard
        </Link>
      </div>
    </div>
  );
};
