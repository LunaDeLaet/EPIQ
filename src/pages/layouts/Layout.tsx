import { PropsWithChildren } from "react";
import Header from "./Header";
import Footer from "./Footer";

const Layout = ({ children }: PropsWithChildren) => {
  return (
    <div className="bg-EPIQ h-full w-full">
      <Header />
      {children}
      {/* <Footer /> */}
    </div>
  );
};

export default Layout;
