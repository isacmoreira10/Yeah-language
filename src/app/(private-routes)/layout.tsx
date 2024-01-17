import { getSession } from "@auth0/nextjs-auth0";
import { redirect } from "next/navigation";
import { ReactNode } from "react";

import { Header } from "@/modules/share/components/Header";

interface PrivateLayoutProps {
  children: ReactNode;
}

export default async function PrivateLayout({ children }: PrivateLayoutProps) {
  const user = await getSession();

  if (!user) {
    redirect("/");
  }

  return (
    <>
      <Header img={user?.user?.picture} userName={user?.user?.nickname} />
      {children}
    </>
  );
}
