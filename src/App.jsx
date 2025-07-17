import {createBrowserRouter, RouterProvider} from 'react-router-dom';
import Home from './home';
import About from './about';

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
  ])
  
  return(
    <>
    <RouterProvider router={router} />
    </>
  )
}