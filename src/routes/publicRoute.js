import { createBrowserRouter } from "react-router-dom";
import Layout from "../components/Layout/Layout";
import Shop from "../pages/Shop/Shop";
import Admin from "../pages/Admin/Admin";
import Cart from "../pages/Cart/Cart";
import Wish from "../pages/WishPage/Wish";
import SingleProduct from "../pages/SingleProduct/SingleProduct";
import Brand from "../components/Brand/Brand";
import Tag from "../components/Tag/Tag";
import Category from "../components/Category/Category";
import Dashboard from "../components/Dashboard/Dashboard";
import Product from "../components/Product/Product";

// create public route
const publicRoute = createBrowserRouter([
    {
        path: "/",
        element: <Layout />,
        children: [
            {
                path: "/",
                element: <Shop />,
            },
            {
                path: "/:slug",
                element: <SingleProduct />,
            },
            {
                path: "admin",
                element: <Admin />,
                children: [
                    {
                        path: "brand",
                        element: <Brand />
                    },
                    {
                        path: "tag",
                        element: <Tag />
                    },
                    {
                        path: "category",
                        element: <Category />
                    },
                    {
                        path: "dashboard",
                        element: <Dashboard />
                    },
                    {
                        path: "product",
                        element: <Product />
                    },
                ]
            },
            {
                path: "cart",
                element: <Cart />,
            },
            {
                path: "wish",
                element: <Wish />,
            },
            {
                path: "cart",
                element: <Cart />,
            },
        ]
    }
]);

// export routes
export default publicRoute;