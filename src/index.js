import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {createBrowserRouter, RouterProvider} from "react-router-dom"
import HomePage from './pages/HomePage';
import AcknoledgementPage from './pages/AcknoledgementPage';
import ErrorPage from './components/Error/ErrorComp';


const router = createBrowserRouter([
{
  path:"/",
  element:<HomePage/>,
  errorElement:<ErrorPage/> ,
  children:[
    
  ]
}, 
{
      path:"acknowledgement",
      element:<AcknoledgementPage/>
    }
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>
);

