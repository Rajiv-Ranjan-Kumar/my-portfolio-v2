import type { Metadata } from "next";
import "./globals.css";
import { Suspense, lazy } from "react";
import { SectionRefsProvider } from "./SectionRefsContext";
const Header = lazy(()=>import("@/components/header"));
const Footer = lazy(()=>import("@/components/footer"));


export const metadata: Metadata = {
  title: "Rajiv Portfolio",
  description: "Created by Rajiv Ranjan Kumar",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <main className="main">
          <SectionRefsProvider>
            <div className="navbar-section"><Suspense><Header/></Suspense></div>
            <section className="container-section">{children}</section>
            <div className="footer-section"><Suspense><Footer/></Suspense></div>
          </SectionRefsProvider>
        </main>
      </body>
    </html>
  );
}
