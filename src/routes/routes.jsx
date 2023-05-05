import { createBrowserRouter } from "react-router-dom";
import Main from "../components/Main/Main";
import Home from "../components/Home/Home";
import Login from "../components/Login/Login";
import Register from "../components/Register/Register";
import Chefs from "../components/Chefs/Chefs";
import Recipes from "../components/Recipes/Recipes";
import RecipesDetails from "../components/RecipesDetails/RecipesDetails";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/register',
                element: <Register></Register>
            },
            {
                path: '/chefs',
                element: <Chefs></Chefs>
            },
           
            {
                path: '/recipes/:id',
                element:  <Recipes></Recipes>,
                loader: ({ params }) => fetch(` https://cook-with-us-server-golam-kibriya123.vercel.app/chef/${params.id}`)

            }
        ]
    }
])
export default router;