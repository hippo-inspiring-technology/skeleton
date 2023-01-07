import "./globals.css";
import React from "react";
import SidebarMenu from "./components/sidebar";
import Header from "./components/header";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <body>
        <div className="h-screen flex flex-row justify-start">
          <SidebarMenu />
          <div className="flex flex-col bg-primary flex-1 text-white">
            <Header />
            <div className="p-4">{children}</div>
          </div>
        </div>
      </body>
    </html>
  );
}
