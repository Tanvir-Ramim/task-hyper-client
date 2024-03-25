import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'
import { RouterProvider } from 'react-router-dom'
import Routers from './Router/Routers'
import AuthProvider from './Provider/AuthProvider'
import { Toaster } from 'react-hot-toast'

ReactDOM.createRoot(document.getElementById('root')).render(
 <AuthProvider>
   <React.StrictMode>
    <Toaster></Toaster>
   <RouterProvider router={Routers}></RouterProvider>
  </React.StrictMode>
 </AuthProvider>
)
