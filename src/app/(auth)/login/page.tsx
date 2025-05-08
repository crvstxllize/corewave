// src/app/auth/login/page.tsx
"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const router = useRouter();
  const [email,setEmail] = useState("");
  const [password,setPassword] = useState("");
  const [error,setError] = useState("");

  const handleSubmit = async(e:React.FormEvent) => {
    e.preventDefault();
    setError("");
    try {
      const res = await fetch("/api/auth/login", {
        method:"POST",
        headers:{"Content-Type":"application/json"},
        body: JSON.stringify({ email, password }),
      });
      if (!res.ok) throw new Error((await res.json()).message||"Error");
      // после успеха — кидаем на дашборд
      router.push("/dashboard");
    } catch(err:any) {
      setError(err.message);
    }
  };

  return (
    <div className="w-full max-w-[400px] bg-white rounded-lg shadow-lg p-8 space-y-6">
      {/* Лого */}
      <img src="/imgs/corewave-logo.svg"
           alt="CoreWave"
           className="mx-auto w-20 h-20" />

      <h1 className="text-center text-2xl font-semibold text-gray-800">
        Login to your Account
      </h1>

      <div className="relative">
        <hr className="border-gray-300" />
        <span className="absolute top-1/2 left-1/2 -translate-x-1/2 bg-white px-3 text-gray-500 text-sm">
          Sign in with Email
        </span>
      </div>

      {error && (
        <p className="text-red-500 text-center text-sm">{error}</p>
      )}

      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="flex flex-col space-y-1">
          <label className="text-gray-700">Email</label>
          <input
            type="email"
            value={email}
            onChange={e=>setEmail(e.target.value)}
            placeholder="mail@abc.com"
            className="w-full h-12 px-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-400"
          />
        </div>

        <div className="flex flex-col space-y-1">
          <label className="text-gray-700">Password</label>
          <input
            type="password"
            value={password}
            onChange={e=>setPassword(e.target.value)}
            placeholder="••••••••••••"
            className="w-full h-12 px-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-400"
          />
        </div>

        <div className="flex items-center justify-between text-sm">
          <label className="flex items-center space-x-2">
            <input
              type="checkbox"
              className="w-4 h-4 text-purple-600 border-gray-300 rounded focus:ring-purple-400"
            />
            <span className="text-gray-700">Remember Me</span>
          </label>
          <button
            type="button"
            className="text-purple-600 hover:underline"
            onClick={()=>{/* TODO: forgot pw */}}
          >
            Forgot Password?
          </button>
        </div>

        <button
          type="submit"
          className="w-full h-12 bg-purple-600 text-white font-medium rounded-lg hover:bg-purple-700"
        >
          Login
        </button>
      </form>

      <div className="text-center text-sm text-gray-600">
        Not registered yet?{" "}
        <a href="/auth/register" className="text-purple-600 hover:underline">
          Create an account
        </a>
      </div>
    </div>
  );
}
