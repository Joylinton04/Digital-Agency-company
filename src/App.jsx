import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./Pages/Home";
import './App.css'
import Layout from "./Layout/Layout";
import Services from "./Pages/Services";
import Work from "./Pages/Work";
import Process from "./Pages/Process";
import About from "./Pages/About";

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
            },
            {
              path: "work",
              element: <Work/>
            },
            {
              path: "process",
              element: <Process/>
            },
            {
              path: "about",
              element: <About/>
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