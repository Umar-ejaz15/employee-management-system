import React from "react";
import { Link } from "react-router-dom";

const Login = () => {
  const onSubmit = (e) => {
    e.preventDefault();
    if (!email || !password) {
      alert("Please fill in all fields");
      return;
    }
    console.log("Form Submitted");
    console.log("email", email);
    console.log("password", password);
    setEmail("");
    setPassword("");
  };
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [showPassword, setShowPassword] = React.useState(false);

  return (
    <div className="w-full min-h-screen bg-white dark:bg-zinc-900 text-zinc-800 dark:text-white flex flex-col">
      <div className="max-w-md mx-auto w-full p-6">
        <h1 className="text-3xl md:text-5xl font-bold text-center mb-8">Welcome Back</h1>
        <form
          onSubmit={(e) => onSubmit(e)}
          className="flex flex-col gap-4"
        >
          <div className="flex flex-col gap-2">
            <label htmlFor="email" className="text-sm font-medium">Email Address</label>
            <input
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full text-sm border-[1px] border-rose-500 outline-none rounded-md px-4 py-2 focus:ring-2 focus:ring-rose-500 focus:border-transparent transition-all"
              type="email"
              placeholder="Enter your email"
              required
            />
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="password" className="text-sm font-medium">Password</label>
            <div className="relative">
              <input
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full text-sm border-[1px] border-rose-500 outline-none rounded-md px-4 py-2 focus:ring-2 focus:ring-rose-500 focus:border-transparent transition-all"
                type={showPassword ? "text" : "password"}
                placeholder="Enter your password"
                required
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500"
              >
                {showPassword ? "Hide" : "Show"}
              </button>
            </div>
          </div>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <input
                type="checkbox"
                name="remember"
                id="remember"
                className="rounded border-gray-300 text-rose-500 focus:ring-rose-500"
              />
              <label htmlFor="remember" className="text-sm">Remember me</label>
            </div>
            <Link to="/forgot-password" className="text-sm text-rose-500 hover:text-rose-600 transition-colors">
              Forgot password?
            </Link>
          </div>
          <button
            type="submit"
            className="bg-rose-500 w-full rounded-md py-2.5 text-white text-lg font-semibold mt-6 hover:bg-rose-600 transition-all transform hover:scale-[1.02] active:scale-[0.98]"
          >
            Sign in
          </button>
          <p className="text-center text-sm mt-4">
            Don't have an account?{" "}
            <Link to="/register" className="text-rose-500 hover:text-rose-600 transition-colors">
              Sign up
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;