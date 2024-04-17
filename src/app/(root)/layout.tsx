import Navbar from "@/components/ui/Navbar";
import React, { ReactNode } from "react";
import StreamVideoProvider from "../../../providers/StreamClientProvider";

const layout = ({ children }: { children: ReactNode }) => {
  return (
    <main className="text-white">
      <StreamVideoProvider>{children}</StreamVideoProvider>
    </main>
  );
};

export default layout;
