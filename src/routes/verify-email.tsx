import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Rocket, CheckCircle2, XCircle, Loader2 } from "lucide-react";
import { verifyEmailToken } from "@/lib/authApi";
import { markVerified, getCurrentUser } from "@/lib/auth";

export const Route = createFileRoute("/verify-email")({
  validateSearch: (search: Record<string, string>) => ({
    token: search.token || "",
  }),
  component: VerifyEmailPage,
  head: () => ({ meta: [{ title: "Verify Email — CareerPilot AI" }] }),
});

function VerifyEmailPage() {
  const { token } = Route.useSearch();
  const navigate = useNavigate();
  const [status, setStatus] = useState<"loading" | "success" | "error">("loading");
  const [message, setMessage] = useState("");

  useEffect(() => {
    if (!token) {
      setStatus("error");
      setMessage("No verification token provided.");
      return;
    }

    verifyEmailToken(token).then((res) => {
      if (res.ok) {
        markVerified(res.email);
        setStatus("success");
        setMessage(`Email verified for ${res.name}!`);
      } else {
        setStatus("error");
        setMessage(res.error);
      }
    });
  }, [token]);

  return (
    <div className="min-h-screen grid place-items-center px-6 py-12">
      <div className="glass w-full max-w-md rounded-3xl p-8 shadow-elegant text-center">
        <Link to="/" className="inline-flex items-center gap-2 mb-6">
          <div className="grid h-9 w-9 place-items-center rounded-xl btn-primary">
            <Rocket className="h-5 w-5" />
          </div>
          <span className="font-semibold">CareerPilot <span className="text-gradient">AI</span></span>
        </Link>

        {status === "loading" && (
          <div className="py-8">
            <Loader2 className="h-12 w-12 animate-spin mx-auto text-primary" />
            <p className="mt-4 text-muted-foreground">Verifying your email...</p>
          </div>
        )}

        {status === "success" && (
          <div className="py-8">
            <CheckCircle2 className="h-16 w-16 mx-auto text-emerald-400" />
            <h2 className="mt-4 text-2xl font-bold">Email Verified!</h2>
            <p className="mt-2 text-sm text-muted-foreground">{message}</p>
            <button
              onClick={() => navigate({ to: "/dashboard" })}
              className="mt-6 btn-primary rounded-xl px-6 py-3 font-medium inline-block"
            >
              Go to Dashboard
            </button>
          </div>
        )}

        {status === "error" && (
          <div className="py-8">
            <XCircle className="h-16 w-16 mx-auto text-red-400" />
            <h2 className="mt-4 text-2xl font-bold">Verification Failed</h2>
            <p className="mt-2 text-sm text-muted-foreground">{message}</p>
            <Link
              to="/login"
              className="mt-6 btn-primary rounded-xl px-6 py-3 font-medium inline-block"
            >
              Back to Sign In
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}
