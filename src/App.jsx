import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./Pages/Home";
import './App.css'
import Layout from "./Layout/Layout";
import Services from "./Pages/Services";

const App = () => {
  const router = createBrowserRouter(
    [
      { 
        path: "/",
        element: <Layout/>,
        children: [
            {
                index: true,
                element: <Home/>
            },
            {
              path: "services",
              element: <Services/>
            }
        ]
      }
    ]
  )

  return (
    <RouterProvider router={router}/>
  )
}

export default App;