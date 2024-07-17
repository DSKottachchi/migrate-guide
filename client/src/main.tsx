import React from "react";
import { store } from "../src/slices/index.ts";
import { Provider } from "react-redux";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import Group from "./pages/group/Group";
import Feed from "./pages/feed/Feed";
import Post from "./pages/post/Post";
import { Login } from "./pages/login/Login.tsx";
import "./index.css";
import { TooltipProvider } from "./components/ui/tooltip.tsx";
import Layout from "./components/layout/index.tsx";
import { Register } from "./pages/register/Register.tsx";
import { ClerkProvider } from "@clerk/clerk-react";

// Import your publishable key
const PUBLISHABLE_KEY = "";

if (!PUBLISHABLE_KEY) {
  throw new Error("Missing Publishable Key");
}

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "",
        element: <App />,
      },
      {
        path: "group",
        element: <Group />,
      },
      {
        path: "feed",
        element: <Feed />,
      },
      {
        path: "post",
        element: <Post />,
      },
    ],
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Register />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ClerkProvider publishableKey={PUBLISHABLE_KEY} afterSignOutUrl="/">
      <Provider store={store}>
        <TooltipProvider>
          <RouterProvider router={router} />
        </TooltipProvider>
      </Provider>
    </ClerkProvider>
  </React.StrictMode>
);
