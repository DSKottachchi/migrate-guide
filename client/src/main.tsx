import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import Group from "./pages/group/Group";
import Feed from "./pages/feed/Feed";
import Post from "./pages/post/Post";
import './index.css'
import { TooltipProvider } from './components/ui/tooltip.tsx';
import Layout from './components/layout/index.tsx';

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
    ]
  },
]);


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <TooltipProvider>
      <RouterProvider router={router}/>    
    </TooltipProvider>
  </React.StrictMode>,
)
