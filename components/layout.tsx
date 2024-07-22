import React, { ReactNode } from "react";
import { cn } from "@/lib/utils";
import Header from "./header";
import Footer from "./footer";

import { Inter } from "next/font/google";

type Props = {
  children: ReactNode;
  className?: string;
};

const inter = Inter({ subsets: ["latin"] });

const Layout = ({ children, className }: Props) => {
  return (
    <div className={` ${inter.className} min-h-screen`}>
      <Header />
      <main className={cn("container mx-auto px-4", className)}>
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
