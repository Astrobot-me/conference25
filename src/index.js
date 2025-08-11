import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {createBrowserRouter, RouterProvider} from "react-router-dom"
import HomePage from './pages/HomePage';
import AcknoledgementPage from './pages/AcknoledgementPage';


const router = createBrowserRouter([
{
  path:"/",
  element:<HomePage/>
}, 
{
  path:"/acknoledgement",
  element:<AcknoledgementPage/>
}, 
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>
);

