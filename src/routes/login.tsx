import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Rocket, Loader2 } from "lucide-react";
import { authenticate, getUsers } from "@/lib/auth";
import { checkEmailVerified, sendVerificationEmail } from "@/lib/authApi";
import { useState } from "react";

export const Route = createFileRoute("/login")({
  component: LoginPage,
  head: () => ({ meta: [{ title: "Sign in — CareerPilot AI" }] }),
});

const loginSchema = z.object({
  email: z.string().email("Enter a valid email"),
  password: z.string().min(1, "Password is required"),
});

type LoginForm = z.infer<typeof loginSchema>;

function LoginPage() {
  const navigate = useNavigate();
  const [serverError, setServerError] = useState("");
  const [needsVerification, setNeedsVerification] = useState("");
  const [resending, setResending] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<LoginForm>({
    resolver: zodResolver(loginSchema),
  });

  const onSubmit = async (data: LoginForm) => {
    setServerError("");
    setNeedsVerification("");
    const result = authenticate(data.email, data.password);
    if (!result.ok) {
      setServerError(result.error);
      return;
    }
    const status = await checkEmailVerified(data.email);
    if (status.ok && !status.verified) {
      setNeedsVerification(data.email);
      return;
    }
    navigate({ to: "/dashboard" });
  };

  const handleResend = async () => {
    setResending(true);
    setServerError("");
    const users = getUsers();
    const user = users.find((u: { email: string }) => u.email === needsVerification);
    const res = await sendVerificationEmail(needsVerification, user?.name || "User");
    if (!res.ok) setServerError(res.error);
    else setServerError("Verification email resent!");
    setResending(false);
  };

  return (
    <div className="min-h-screen grid place-items-center px-6 py-12">
      <div className="glass w-full max-w-md rounded-3xl p-8 shadow-elegant">
        <Link to="/" className="flex items-center gap-2">
          <div className="grid h-9 w-9 place-items-center rounded-xl btn-primary">
            <Rocket className="h-5 w-5" />
          </div>
          <span className="font-semibold">CareerPilot <span className="text-gradient">AI</span></span>
        </Link>
        <h1 className="mt-6 text-3xl font-bold">Welcome back</h1>
        <p className="mt-2 text-sm text-muted-foreground">Sign in to continue your placement prep.</p>
        <form onSubmit={handleSubmit(onSubmit)} className="mt-8 space-y-3">
          <div>
            <input {...register("email")} type="email" placeholder="Email" className="w-full glass rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-primary/60" />
            {errors.email && <p className="text-xs text-red-400 mt-1">{errors.email.message}</p>}
          </div>
          <div>
            <input {...register("password")} type="password" placeholder="Password" className="w-full glass rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-primary/60" />
            {errors.password && <p className="text-xs text-red-400 mt-1">{errors.password.message}</p>}
          </div>
          {serverError && <p className="text-xs text-red-400">{serverError}</p>}
          {needsVerification && (
            <p className="text-xs text-amber-400">
              Please verify your email before signing in.{" "}
              <button
                type="button"
                onClick={handleResend}
                disabled={resending}
                className="text-primary-glow hover:underline"
              >
                {resending ? "Resending..." : "Resend verification email"}
              </button>
            </p>
          )}
          <div className="flex items-center justify-between text-xs text-muted-foreground">
            <label className="flex items-center gap-2"><input type="checkbox" /> Remember me</label>
            <a href="#" className="hover:text-foreground">Forgot password?</a>
          </div>
          <button type="submit" disabled={isSubmitting || resending} className="w-full btn-primary rounded-xl px-6 py-3 font-medium disabled:opacity-50">
            {isSubmitting ? "Signing in..." : "Sign in"}
          </button>
        </form>
        <p className="mt-6 text-center text-sm text-muted-foreground">
          New here? <Link to="/signup" className="text-primary-glow hover:underline">Create an account</Link>
        </p>
      </div>
    </div>
  );
}
