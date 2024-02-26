import React from "react";
import Footer from "./Footer";
import Navbar from "./Header/Navbar";

export default function GlobalLayout({ children }: any) {
  return (
    <>
      <main className="h-screen w-full bg-white">
        <Navbar />

        <div className="bg-white">{children}</div>

        <div className=" ">
          <Footer />
        </div>
      </main>
    </>
  );
}
