import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./Pages/Home";
import './App.css'
import Layout from "./Layout/Layout";
import Services from "./Pages/Services";
import Work from "./Pages/Work";
import Process from "./Pages/Process";
import About from "./Pages/About";
import Career from "./Pages/Career";
import Contact from "./Pages/Contact";

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
            },
            {
              path: "career",
              element: <Career/>
            },
            {
              path: "contact",
              element: <Contact/>
            },
        ]
      }
    ]
  )

  return (
    <RouterProvider router={router}/>
  )
}

export default App;