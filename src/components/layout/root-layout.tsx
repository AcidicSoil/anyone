import { type PropsWithChildren } from "react";
import { Header } from "./header";
import { Footer } from "./footer";

export function RootLayout({ children }: PropsWithChildren) {
  return (
    <div className="flex min-h-screen flex-col bg-white dark:bg-neutral-900">
      <Header />
      <main className="flex-1">{children}</main>
      <Footer />
    </div>
  );
} 