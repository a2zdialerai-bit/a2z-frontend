"use client";

import { useEffect, useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import { clearToken, fetchMe, getToken } from "@/lib/api";

export default function Protected({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  const pathname = usePathname();
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const token = getToken();

    const isPublic =
      pathname === "/" ||
      pathname === "/login" ||
      pathname === "/register";

    if (!token) {
      if (!isPublic) router.replace("/login");
      setReady(true);
      return;
    }

    fetchMe()
      .then(() => setReady(true))
      .catch(() => {
        clearToken();
        if (!isPublic) router.replace("/login");
        setReady(true);
      });
  }, [pathname, router]);

  if (!ready) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-neutral-950 text-white">
        <div className="rounded-2xl border border-white/10 bg-white/5 px-6 py-4 text-sm">
          Loading A2Z Dialer...
        </div>
      </div>
    );
  }

  return <>{children}</>;
}
