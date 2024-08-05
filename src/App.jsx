import { useState } from 'react'
import { Router } from 'react-router-dom'
import { createBrowserRouter,RouterProvider } from 'react-router-dom'
import './App.css'
import Account from './Component/Account'
import Calculators from './Component/Calculators' 
import Channel from './Component/Channel'
import Customers from './Component/Customers'
import Dashboard from './Component/Dashboard'
import Integrations from './Component/Integrations'
import Inventory from './Component/Inventory'
import Order from './Component/Order'
import Reports from './Component/Reports'
import Returns from './Component/Returns'
import Shippring from './Component/Shippring'
import NavSideBar from './NavSideBar/NavSideBar'
import Home from './Home/Home'
function App() {
 
 const router = createBrowserRouter([
{ path:'/',
  element:<Home/>,
  children:[
  {
  path:'/',
  element:<Dashboard/>
  },
  {
  path:'/inventory',
  element:<Inventory/>
  }, 
  {
  path:'/order',
  element:<Order/>
  },
  {
    path:'/returns',
    element:<Returns/>
    },
    {
      path:'/customers',
      element:<Customers/>
      },
      {
        path:'/shipping',
        element:<Shippring/>
        },
        {
          path:'/channel',
          element:<Channel/>
          },
          {
            path:'/integrations',
            element:<Integrations/>
            },
            {
              path:'/calculators',
              element:<Calculators/>
              },
              {
                path:'/reports',
                element:<Reports/>
                },
                {
                  path:'/account',
                  element:<Account/>
                  }
  ] }
 ])

  return (
    <>
    <RouterProvider router={router}/>
    </>
  )
}

export default App
