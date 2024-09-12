import { createBrowserRouter, createHashRouter, RouterProvider } from 'react-router-dom'
import Home from './Pages/Home/Home'
import Layout from './LayOut/Layout'
import ContactUs from './Pages/ContactUs/ContactUs'
import AboutUs from './Pages/AboutUs/AboutUs'
import OurCars from './Pages/OurCars/OurCars'
import CarDetails from './Pages/CarDetails/CarDetails'
import CarDetails2 from './Pages/CarDetails/CarDetails2'
import { dataCars } from './Components/OurCarsDetails/OurCarsDetails'
import CategoryContextProvider from './Context/categoryContext'

let App = () => {

  let router = createBrowserRouter([
    {
      path: '', element: <Layout />, children: [
        { index: true, element: <Home /> },
        { path: 'aboutus', element: <AboutUs /> },
        { path: 'contactus', element: <ContactUs /> },
        { path: 'ourcars', element: <OurCars /> },
        { path: `ourcars/:${dataCars.id}/:content`, element: <CarDetails /> },
        // { path: `ourcars/:${dataCars.id}/:content`, element: <CarDetails2 /> },
      ]
    }
  ])

  return (
    <>
      <CategoryContextProvider>
        <RouterProvider router={router}>
        </RouterProvider>
      </CategoryContextProvider>
    </>
  )
}

export default App
