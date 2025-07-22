import {createBrowserRouter, RouterProvider} from 'react-router-dom';
import Home from './home';
import About from './about';
import Project from './project';

export default function App(){
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Home/>
    },
    {
      path: '/about',
      element: <About/>
    },
    {
      path: '/project',
      element: <Project/>
    }
  ])
  
  return(
    <>
    <RouterProvider router={router} />
    </>
  )
}