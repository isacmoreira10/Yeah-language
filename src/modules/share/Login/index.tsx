"use client";

import { useRouter } from "next/navigation";
import { useEffect } from "react";

export function Login() {
  const router = useRouter();

  useEffect(() => {
    redirect();
  }, []);

  function redirect() {
    router.push("/api/auth/login");
  }

  return <div></div>;
}
