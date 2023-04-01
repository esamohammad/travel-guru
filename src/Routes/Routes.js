import { createBrowserRouter } from "react-router-dom";
import Login from "../Auth/Login/Login";
import Blog from "../Components/Blog/Blog";
import Contact from "../Components/Contact/Contact";
import Gallery from "../Components/Gallery/Gallery";
import Home from "../Components/Home/Home";
import News from "../Components/News/News";
import Main from "../Layout/Main";
export const routes = createBrowserRouter([
   {
       path: '/',
       element: <Main></Main>,
       children: [
           {
               path: '/',
               element: <Home/>
           },
           {
               path: '/news',
               element: <News/>           },
           {
               path: '/blog',
               element: <Blog/>
           },
           {
               path: '/contact',
               element: <Contact/>
           },
           {
               path: '/login',
               element: <Login/>
           },
           {
                path: '/gallery',
                element: <Gallery></Gallery>
           }
       ]
   }
])