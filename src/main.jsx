import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import Header from './components/Header.jsx'
import SingleCountry from './components/pages/SingleCountry.jsx'

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <h1>Error</h1>
  },
  {
    path: "/:country",
    element: <>
    <Header />
    <SingleCountry/>
    </>
  },


])



createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={appRouter} />
  </StrictMode>,
)
