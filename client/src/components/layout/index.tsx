import {
  Home,
  LineChart,
  Package,
  Package2,
  Search,
  ShoppingCart,
} from "lucide-react";
import "./index.css";
import { Link, Outlet } from "react-router-dom";
import { Input } from "../ui/input";
import { SignedIn, SignedOut, UserButton } from "@clerk/clerk-react";
import { Login } from "@/pages/login/Login";

const Layout = () => {
  return (
    <>
      <SignedIn>
        <div className="layout">
          <div className="sidebar border-r">
            <div className="flex h-14 items-center border-b p-4 lg:h-[60px] lg:px-6">
              <Link
                className="flex items-center gap-2 font-semibold"
                to={"/feed"}
              >
                <Package2 className="h-6 w-6" />
                <span className="">Migrate Guide</span>
              </Link>
            </div>

            <nav className="px-2 text-sm font-medium lg:px-4">
              <Link
                className="mt-10 flex items-center gap-3 rounded-lg bg-muted px-3 py-2 text-primary transition-all hover:text-primary"
                to={"/feed"}
              >
                <Home className="h-4 w-4" />
                Your Feed
              </Link>
              <Link
                className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary"
                to={"/feed"}
              >
                <ShoppingCart className="h-4 w-4" />
                Discover
              </Link>
              <Link
                className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary"
                to={"/post"}
              >
                <Package className="h-4 w-4" />
                Groups
              </Link>
              <Link
                className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary"
                to={"/group"}
              >
                <LineChart className="h-4 w-4" />
                Profile
              </Link>
            </nav>
          </div>

          <div className="ml-2 content">
            <div className="h-16 z-10 px-6 p-2 justify-between flex w-full sticky top-0 bg-white">
              <form>
                <div className="relative">
                  <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                  <Input
                    type="search"
                    placeholder="Search products..."
                    className="w-full appearance-none bg-background pl-8 shadow-none"
                  />
                </div>
              </form>

              <UserButton />

              {/* <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button
                    variant="secondary"
                    size="icon"
                    className="rounded-full"
                  >
                    <CircleUser className="h-5 w-5" />
                    <span className="sr-only">Toggle user menu</span>
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                  <DropdownMenuLabel>My Account</DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem>Settings</DropdownMenuItem>
                  <DropdownMenuItem>Support</DropdownMenuItem>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem>Logout</DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu> */}
            </div>
            <div className="p-6">
              <Outlet />
            </div>
          </div>
        </div>
      </SignedIn>
      <SignedOut>
        <Login />
      </SignedOut>
    </>
  );
};

export default Layout;
