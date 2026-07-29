import { createFileRoute, Outlet, useNavigate } from "@tanstack/react-router";
import { AppSidebar, AppTopbar } from "@/components/app/AppSidebar";
import { isLoggedIn } from "@/lib/auth";
import { useEffect } from "react";

export const Route = createFileRoute("/_app")({
  component: AppLayout,
});

function AppLayout() {
  const navigate = useNavigate();

  useEffect(() => {
    if (!isLoggedIn()) {
      navigate({ to: "/login", replace: true });
    }
  }, [navigate]);

  if (!isLoggedIn()) return null;

  return (
    <div className="min-h-screen">
      <AppSidebar />
      <AppTopbar />
      <main className="lg:pl-64">
        <div className="mx-auto max-w-6xl px-6 py-8">
          <Outlet />
        </div>
      </main>
    </div>
  );
}
