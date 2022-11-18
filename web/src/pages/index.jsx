import { useLocalStorage } from 'react-use'

import {
    createBrowserRouter,
    RouterProvider,
    Route
  } from "react-router-dom";


  import { Home } from './Home'
  import { Login } from './Login'
  import { Signup } from './Signup/sign_up';
  import { Dashboard } from "./Dashboard/dash";
  import { Profile } from "./Profile/prof";

  const router = createBrowserRouter([

    {
      path: "/", 
      element: <Home />,
    },

    {
    
      path: "/login", 
      element: <Login />,
    },
   
    {
      path: "/signup", 
      element: <Signup />,
    },

    {
      path: "/dashboard", 
      element: <Dashboard />,
    },

    {
      path: "/profile",
      element: <Profile />,
    },
  ]);
  
  export const Router = () => {
    const [auth] = useLocalStorage('auth')
    console.log(auth)

    return <RouterProvider router={router} />
  }

  