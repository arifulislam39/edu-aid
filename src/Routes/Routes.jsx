import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home";
import Registration from "../Login-Registration/Registration";
import Login from "../Login-Registration/Login";
import Colleges from "../Pages/Colleges/Colleges";
import Admission from "../Pages/Admission/Admission";
import MyCollege from "../Pages/MyCollege/MyCollege";


export const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children:[
        {
            path: "/",
            element:<Home></Home>,
        },
        {
          path:"/registration",
          element:<Registration></Registration>
        },
        {
          path:"/login",
          element:<Login></Login>
        },
        {
          path:"/colleges",
          element:<Colleges></Colleges>
        },
        {
          path:"/admission",
          element:<Admission></Admission>
        },
        {
          path:"myCollege",
          element:<MyCollege></MyCollege>
        }
      ]
    },
  ]);