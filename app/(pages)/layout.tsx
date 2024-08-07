import * as React from "react";
import NavBar from "./widgets/NavBar";
import Footer from "./widgets/Footer";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <NavBar />
      {children}
      <Footer />
    </>
  );
}
