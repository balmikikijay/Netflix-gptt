import { createBrowserRouter } from "react-router-dom"
import Brouse from "./Brouse"
import Login from "./Login"
import { RouterProvider } from "react-router-dom"


const Body = () => {
  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <Login/>
    },
     {
      path: "/brouse",
      element: <Brouse/>
    }
  ])
 
  return (
    <div>
       <div>
      
      <RouterProvider router={appRouter}/>
    
    </div>

    
    <div className="flex gap-2 items-center">
    
    
    </div>
   

    </div>
  )
}
// hey bro
 
export default Body
