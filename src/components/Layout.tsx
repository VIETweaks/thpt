import { Header } from "./Header";
import { Footer } from "./Footer";
import { FloatingMenu } from "./FloatingMenu";
import { ReactNode } from "react";

interface LayoutProps {
  children: ReactNode;
}

export function Layout({ children }: LayoutProps) {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        {children}
      </main>
      <Footer />
      <FloatingMenu />
    </div>
  );
}