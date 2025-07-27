
import {RouterProvider, Route, createRoutesFromElements, createBrowserRouter} from "react-router-dom";
import LandingPage from "./pages/landing-page";

const router = createBrowserRouter(
  createRoutesFromElements(
      <Route path="/" element={<LandingPage />} />
  )
)

function App() {

  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
