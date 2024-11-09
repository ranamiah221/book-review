import { createBrowserRouter } from "react-router-dom";
import MyLayouts from "../Layouts/MyLayouts";
import Home from "../pages/Home/Home";
import BookList from "../pages/bookList/BookList";
import PageOfRead from "../pages/pageOfRead/PageOfRead";
import SignUp from "../pages/signUp/SignUp";
import SignIn from "../pages/signIn/SignIn";
import BookDetails from "../components/BookDetails/BookDetails";

const Router = createBrowserRouter([
    {
        path:'/',
        element:<MyLayouts></MyLayouts>,
        children:[
            {
                path:'/',
                element:<Home></Home>,
            },
            {
               path:'/bookList',
               element:<BookList></BookList>,
            },
            {
                path:'/bookDetails/:id',
                element:<BookDetails></BookDetails>,
                loader:({params})=>fetch('./books.json')
             },

            {
                path:'/pageOfRead',
                element:<PageOfRead></PageOfRead>
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