import Image from "next/image";
import Link from "next/link";

import { LogOutButton } from "./LogOutButton";

interface HeaderProps {
  img: string;
  userName: string;
}

export function Header({ img, userName }: HeaderProps) {
  return (
    <header className="border-b border-gray">
      <div className="max-w-5xl p-1 m-auto flex items-center justify-between">
        <Link href="/" className="text-xl font-bold text-green-primary">
          Yeah-language
        </Link>
        <div className="flex items-center gap-4">
          <span className="text-purple-primary">{userName}</span>
          <Image
            src={img}
            alt="avatar"
            width={20}
            height={20}
            className="rounded-full"
          />

          <LogOutButton></LogOutButton>
        </div>
      </div>
    </header>
  );
}
