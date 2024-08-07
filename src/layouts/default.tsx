import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

interface DefaultLayoutProps extends React.HTMLAttributes<HTMLElement> {}

const DefaultLayout: React.FC<DefaultLayoutProps> = ({
  children,
  className = "",
  ...props
}) => {
  return (
    <div>
      <Header />
      <main className={`mx-auto max-w-screen-xl p-4 ${className}`} {...props}>
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default DefaultLayout;
