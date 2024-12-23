import AddToCart from "../Pages/AddToCart";
import Home from "../Pages/Home";
export const RouterList = [

    {
    path:"/",
    element:<Home/>
    },
    {
        path:"/gotocart",
        element:<AddToCart/>
    },

]