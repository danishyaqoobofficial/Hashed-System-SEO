import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'


import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Processing from './Pages/Processing';
import HomePage from './Pages/Home';
import Signup from './Pages/Signup.jsx';
import EnterOtpPage from './Pages/EnterOtpPage.jsx';
import Logon from './Pages/Login.jsx';
import Dashboard from './Pages/Dashboard.jsx';



const router = createBrowserRouter([
  {
    path : '/',
    element : <HomePage/>
  },
  {
    path : '/processing',
    element : <Processing/>
  },
  {
    path : '/login',
    element : <Logon/>
  },
  {
    path : '/signup',
    element : <Signup/>
  },
  {
    path : '/enterotp',
    element : <EnterOtpPage/>
  },
  {
    path : '/dashboard',
    element : <Dashboard/>
  },
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
