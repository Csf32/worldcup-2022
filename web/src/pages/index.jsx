import {
    createBrowserRouter,
    RouterProvider,
    Route,
  } from "react-router-dom";

  //É preciso importar aqui a Home

  import { Home } from './Home'
  import { Login } from './Login'
  import { Signup } from './Signup/sign_up';
  import { Dashboard } from "./Dashboard/dash";
  import { Profile } from "./Profile/prof";

  const router = createBrowserRouter([
    //Aqui são as rotas:
    {
      path: "/", //Endereço
      element: <Home />,
    },

    {
      //O path não pode ser igual ao nome do arquivo, tipo login.jsx
      path: "/login", 
      element: <Login />,
    },
    /*
    path: "/login",
    element: <div>login</div>,
  ,

  
  path: "/signup",
  element: <div>Cadastro</div>,
,*/
    {
      path: "/signup", //Endereço
      element: <Signup />,
    },

    {
      path: "/dashboard", //Endereço
      element: <Dashboard />,
    },

    {
      path: "/profile", //Endereço
      element: <Profile />,
    },
  ]);
  
  //Modifica no main de App para Router, pois tudo isso será importado de lá
  //App.jsx virou index.js na pasta home

  export const Router = () => (
    <RouterProvider router={router} />
  )

  