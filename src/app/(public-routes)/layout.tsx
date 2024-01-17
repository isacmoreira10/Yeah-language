import { redirect } from "next/navigation";
import { getSession } from "@auth0/nextjs-auth0";
import { ReactNode } from "react";

interface PrivateLayoutProps {
  children: ReactNode;
}

export default async function PrivateLayout({ children }: PrivateLayoutProps) {
  const user = await getSession();

  if (user) {
    redirect("/challenges");
  }

  return <>{children}</>;
}
