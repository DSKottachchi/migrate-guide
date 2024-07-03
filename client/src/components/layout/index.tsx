import "./index.css";
import { Link, Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div className="layout">
      <div className="sidebar border-r ">
        <nav className="px-2 text-sm font-medium lg:px-4">
          <Link
            className="text-lg flex items-center px-3 py-2 transition-all hover:text-primary"
            to={"/feed"}
          >
            RELOCATE ME
          </Link>
         
          
          <Link
            className="mt-10 flex items-center gap-3 rounded-lg bg-muted px-3 py-2 text-primary transition-all hover:text-primary"
            to={"/feed"}
          >
            Your Feed
          </Link>
          <Link
            className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary"
            to={"/feed"}
          >
            Discover
          </Link>
          <Link
            className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary"
            to={"/post"}
          >
            Groups
          </Link>
          <Link
            className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary"
            to={"/group"}
          >
            Profile
          </Link>
        </nav>
      </div>
      <div className="ml-2 p-10 content">
        <Outlet />
      </div>
    </div>
  );
};

export default Layout;
