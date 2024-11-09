import { createBrowserRouter } from "react-router-dom";
import MyLayouts from "../Layouts/MyLayouts";
import Home from "../pages/Home/Home";
import BookList from "../pages/bookList/BookList";
import PageOfRead from "../pages/pageOfRead/PageOfRead";
import SignUp from "../pages/signUp/SignUp";
import SignIn from "../pages/signIn/SignIn";
import BookDetails from "../components/BookDetails/BookDetails";
import PrivateRoute from "./PrivateRoute/PrivateRoute";
import ErrorPage from "../pages/ErrorPage/ErrorPage";

const Router = createBrowserRouter([
    {
        path:'/',
        element:<MyLayouts></MyLayouts>,
        errorElement:<ErrorPage></ErrorPage>,
        children:[
            {
                path:'/',
                element:<Home></Home>,
            },
            {
               path:'/bookList',
               element:<PrivateRoute><BookList></BookList></PrivateRoute>,
            },
            {
                path:'/bookDetails/:id',
                element:<BookDetails></BookDetails>,
                loader:({params})=>fetch('./books.json')
             },

            {
                path:'/pageOfRead',
                element:<PrivateRoute><PageOfRead></PageOfRead></PrivateRoute>
             },
             {
                path:'/signUp',
                element:<SignUp></SignUp>,
             },
             {
                path:'/signIn',
                element:<SignIn></SignIn>
             },
        ]
    }
])

export default Router;