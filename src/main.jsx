import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'


import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Processing from './Pages/Processing.jsx';
import HomePage from './Pages/Home';
import Signup from './Pages/Signup.jsx';
import EnterOtpPage from './Pages/EnterOtpPage.jsx';
import Dashboard from './Pages/Dashboard.jsx';
import Login from './Pages/Login.jsx';
import Charts from './Pages/charts.jsx';



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
    element : <Login/>
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
    element : <Dashboard/>,
    
  },
  {
    path : '/charts',
    element : <Charts/>
  },
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} basename="/"/>
  </React.StrictMode>,
)
