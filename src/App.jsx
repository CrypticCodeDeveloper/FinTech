
import {RouterProvider, Route, createRoutesFromElements, createBrowserRouter} from "react-router-dom";
import BaseLayout from "./layouts/base-layout";
import LandingPage from "./pages/landing-page";

const router = createBrowserRouter(
  createRoutesFromElements(
      <Route element={<BaseLayout />} path="/" >
          <Route index element={<LandingPage />} />
      </Route>
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
