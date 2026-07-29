import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Rocket, Mail, Loader2 } from "lucide-react";
import { registerUser, getCurrentUser } from "@/lib/auth";
import { sendVerificationEmail } from "@/lib/authApi";
import { useState } from "react";

export const Route = createFileRoute("/signup")({
  component: SignupPage,
  head: () => ({ meta: [{ title: "Create account — CareerPilot AI" }] }),
});

const signupSchema = z.object({
  name: z.string().min(1, "Full name is required"),
  email: z.string().email("Enter a valid email"),
  college: z.string().min(1, "College is required"),
  branch: z.string().min(1, "Branch is required"),
  graduationYear: z.string().min(1, "Graduation year is required"),
  password: z.string().min(6, "Password must be at least 6 characters"),
});

type SignupForm = z.infer<typeof signupSchema>;

function SignupPage() {
  const navigate = useNavigate();
  const [serverError, setServerError] = useState("");
  const [registeredEmail, setRegisteredEmail] = useState("");
  const [emailSending, setEmailSending] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<SignupForm>({
    resolver: zodResolver(signupSchema),
  });

  const onSubmit = async (data: SignupForm) => {
    setServerError("");
    const result = registerUser({
      name: data.name,
      email: data.email,
      college: data.college,
      branch: data.branch,
      graduationYear: data.graduationYear,
      password: data.password,
    });
    if (!result.ok) {
      setServerError(result.error);
      return;
    }
    setRegisteredEmail(data.email);
    setEmailSending(true);
    const emailRes = await sendVerificationEmail(data.email, data.name);
    setEmailSending(false);
    if (!emailRes.ok) {
      setServerError("Account created but couldn't send verification email. " + emailRes.error);
    }
  };

  if (registeredEmail) {
    return (
      <div className="min-h-screen grid place-items-center px-6 py-12">
        <div className="glass w-full max-w-md rounded-3xl p-8 shadow-elegant text-center">
          <Link to="/" className="inline-flex items-center gap-2 mb-6">
            <div className="grid h-9 w-9 place-items-center rounded-xl btn-primary">
              <Rocket className="h-5 w-5" />
            </div>
            <span className="font-semibold">CareerPilot <span className="text-gradient">AI</span></span>
          </Link>
          <div className="py-6">
            {emailSending ? (
              <Loader2 className="h-12 w-12 animate-spin mx-auto text-primary" />
            ) : (
              <Mail className="h-16 w-16 mx-auto text-primary-glow" />
            )}
            <h2 className="mt-4 text-2xl font-bold">Verify your email</h2>
            <p className="mt-2 text-sm text-muted-foreground">
              {emailSending
                ? "Sending verification email..."
                : `We sent a verification link to ${registeredEmail}. Click the link to activate your account.`}
            </p>
            {!emailSending && (
              <div className="mt-6 space-y-3">
                <button
                  onClick={() => navigate({ to: "/login" })}
                  className="w-full btn-primary rounded-xl px-6 py-3 font-medium"
                >
                  Go to Sign In
                </button>
                <p className="text-xs text-muted-foreground">
                  Didn't get the email? Check your spam folder or{" "}
                  <button
                    onClick={async () => {
                      setEmailSending(true);
                      setServerError("");
                      const user = getCurrentUser();
                      if (user) {
                        const res = await sendVerificationEmail(user.email, user.name);
                        if (!res.ok) setServerError(res.error);
                      }
                      setEmailSending(false);
                    }}
                    className="text-primary-glow hover:underline"
                  >
                    resend
                  </button>
                </p>
                {serverError && <p className="text-xs text-red-400">{serverError}</p>}
              </div>
            )}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen grid place-items-center px-6 py-12">
      <div className="glass w-full max-w-md rounded-3xl p-8 shadow-elegant">
        <Link to="/" className="flex items-center gap-2">
          <div className="grid h-9 w-9 place-items-center rounded-xl btn-primary">
            <Rocket className="h-5 w-5" />
          </div>
          <span className="font-semibold">CareerPilot <span className="text-gradient">AI</span></span>
        </Link>
        <h1 className="mt-6 text-3xl font-bold">Create your account</h1>
        <p className="mt-2 text-sm text-muted-foreground">Start your AI-guided placement journey.</p>
        <form onSubmit={handleSubmit(onSubmit)} className="mt-8 space-y-3">
          <div>
            <input {...register("name")} placeholder="Full name" className="w-full glass rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-primary/60" />
            {errors.name && <p className="text-xs text-red-400 mt-1">{errors.name.message}</p>}
          </div>
          <div>
            <input {...register("email")} type="email" placeholder="Email" className="w-full glass rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-primary/60" />
            {errors.email && <p className="text-xs text-red-400 mt-1">{errors.email.message}</p>}
          </div>
          <div className="grid grid-cols-2 gap-3">
            <div>
              <input {...register("college")} placeholder="College" className="w-full glass rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-primary/60" />
              {errors.college && <p className="text-xs text-red-400 mt-1">{errors.college.message}</p>}
            </div>
            <div>
              <input {...register("branch")} placeholder="Branch" className="w-full glass rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-primary/60" />
              {errors.branch && <p className="text-xs text-red-400 mt-1">{errors.branch.message}</p>}
            </div>
          </div>
          <div>
            <input {...register("graduationYear")} placeholder="Graduation year" className="w-full glass rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-primary/60" />
            {errors.graduationYear && <p className="text-xs text-red-400 mt-1">{errors.graduationYear.message}</p>}
          </div>
          <div>
            <input {...register("password")} type="password" placeholder="Password" className="w-full glass rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-primary/60" />
            {errors.password && <p className="text-xs text-red-400 mt-1">{errors.password.message}</p>}
          </div>
          {serverError && <p className="text-xs text-red-400">{serverError}</p>}
          <button type="submit" disabled={isSubmitting} className="w-full btn-primary rounded-xl px-6 py-3 font-medium disabled:opacity-50">
            {isSubmitting ? "Creating account..." : "Create account"}
          </button>
        </form>
        <p className="mt-6 text-center text-sm text-muted-foreground">
          Already registered? <Link to="/login" className="text-primary-glow hover:underline">Sign in</Link>
        </p>
      </div>
    </div>
  );
}
