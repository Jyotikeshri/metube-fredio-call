"use client";

import { SidebarLinks } from "@/constants";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const Sidebar = () => {
  const pathname = usePathname();
  return (
    <section
      className="sticky left-0 top-0 bg-dark-1 flex h-screen w-fit flex-col justify-between p-6 pt-28 text-white max-sm:hidden 
  lg:w-[264px] "
    >
      <div className="flex flex-col gap-6">
        {SidebarLinks?.map((link) => {
          const isActive = pathname === link.Route;
          return (
            <Link
              href={link.Route}
              key={link.Label}
              className={cn(
                "flex gap-4 items-center p-4 rounded-lg justify-start cursor-pointer text-white",
                {
                  "bg-red-1": isActive,
                }
              )}
            >
              <img src={link.imgUrl} alt={link.Label} width={24} height={24} />
              <p className="text-lg font-semibold max-lg:hidden">
                {link.Label}
              </p>
            </Link>
          );
        })}
      </div>
    </section>
  );
};

export default Sidebar;
