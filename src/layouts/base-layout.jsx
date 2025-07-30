
import { Outlet } from "react-router-dom"

const BaseLayout = () => {
  return (
    <div className="min-h-screen w-full bg-black">
        <Outlet />
    </div>
  )
}

export default BaseLayout