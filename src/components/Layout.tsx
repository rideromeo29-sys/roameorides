import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
import FloatingConcierge from "./FloatingConcierge";

const Layout = () => (
  <div className="min-h-screen bg-background text-foreground">
    <Navbar />
    <main>
      <Outlet />
    </main>
    <Footer />
    <FloatingConcierge />
  </div>
);

export default Layout;
