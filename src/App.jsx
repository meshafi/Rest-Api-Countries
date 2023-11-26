import { createBrowserRouter,RouterProvider,Outlet} from 'react-router-dom';
import { Header } from './components/Header.jsx';
import {Body} from './components/Body.jsx';
import React, { createContext } from 'react'
import ReactDOM from 'react-dom/client'
import CardDetails from './components/CardDetail.jsx'; 
import { useState,useContext } from 'react';
import ThemeProvider  from  './components/ThemeContext.jsx';

function App() {

  return (
       <ThemeProvider>
        <Header />
        <Outlet />
       </ThemeProvider>
  );
}
const appRouter=createBrowserRouter([
  {
    path:"/",
    element: <App/>,
    children:[
      {
        path:"/",
        element:<Body/>,
      },
      {
        path:'/country/:id',
        element:<CardDetails/>
      }
    ]
  }
]);
const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<RouterProvider router={appRouter}/>);
