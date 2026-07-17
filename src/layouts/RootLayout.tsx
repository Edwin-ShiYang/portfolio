import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import { ScrollRestoration } from "react-router-dom";
import Footer from "../components/Footer";

const RootLayout = () => {
  return (
    <>
      <div className="max-w-screen-2xl mx-auto">
        <div className="px-5 sm:px-8 lg:px-10">
          <Header />

          <div className="mt-12 md:mt-16">
            <Outlet />
          </div>

          <Footer />
        </div>
      </div>
      <ScrollRestoration />
    </>
  );
};

export default RootLayout;
