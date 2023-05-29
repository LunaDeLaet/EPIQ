import { PropsWithChildren } from "react";
import Header from "./Header";
import Footer from "./Footer";

const Layout = ({ children }: PropsWithChildren) => {
  return (
    <div className="bg-EPIQ  absolute top-0 bottom-0 right-0 left-0 -z-10 text-grey">
      <Header />
      {children}
      {/* <Footer /> */}
    </div>
  );
};

export default Layout;
