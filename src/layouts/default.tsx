import React from "react";

import Footer from "@/components/Footer";
import Header from "@/components/Header";

interface DefaultLayoutProps extends React.HTMLAttributes<HTMLElement> {}

const DefaultLayout: React.FC<DefaultLayoutProps> = ({
  children,
  className = "",
  ...props
}) => {
  return (
    <div className="relative flex min-h-screen w-full flex-col">
      <Header />
      <main
        className={`mx-auto w-full max-w-screen-xl flex-1 p-4 ${className}`}
        {...props}
      >
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default DefaultLayout;
