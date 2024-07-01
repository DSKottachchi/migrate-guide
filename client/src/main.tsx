import React from 'react'
import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider, Link } from 'react-router-dom';
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import Group from "./pages/group/Group";
import Feed from "./pages/feed/Feed";
import './index.css'
import { TooltipProvider } from './components/ui/tooltip.tsx';

const router = createBrowserRouter([
  {
    path: "/",
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
]);


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <TooltipProvider>
      <RouterProvider router={router}/>    
    </TooltipProvider>
  </React.StrictMode>,
)
