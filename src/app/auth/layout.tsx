import { Button } from "@/components/ui/button";
import Image from "next/image";

export default async function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="bg-neutral-200 min-h-screen">
      <div className="mx-auto max-w-screen-2xl p-4">
        <nav className="flex justify-between items-center">
          <Image src={`/logo.svg`} height={56} width={152} alt="logo" />
          <Button variant={`secondary`}>Sign Up</Button>
        </nav>
      </div>
      <div className="flex flex-col items-center justify-center pt-4 md:pt-14">
        {children}
      </div>
    </main>
  );
}
