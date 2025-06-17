import { Outlet } from "react-router";

import { Navbar } from "../components/shared/Navbar";

export const MainLayout = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-1 bg-white">
        <Outlet />
      </main>
    </div>
  );
};
