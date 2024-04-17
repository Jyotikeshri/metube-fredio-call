import Navbar from "@/components/ui/Navbar";
import Sidebar from "@/components/ui/Sidebar";
import React, { ReactNode } from "react";

const HomeLayout = ({ children }: { children: ReactNode }) => {
  return (
    <main className="relative text-white ">
      <Navbar />
      <div className="flex text-white">
        <Sidebar />
        <section className="flex min-h-screen flex-1 flex-col px-6 pb-6 pt-18 max-md:pb-14 sm:px-14">
          <div className="w-full h-full relative bottom-0">{children}</div>
        </section>
      </div>
      Footer
    </main>
  );
};

export default HomeLayout;
