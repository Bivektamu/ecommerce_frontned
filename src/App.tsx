import { Suspense, lazy } from "react"

import { RouterProvider, createBrowserRouter } from "react-router-dom"
const DashBoard = lazy(() => import("./pages/admin/DashBoard"))
const Products = lazy(() => import("./pages/admin/Products"))
const SignIn = lazy(() => import("./pages/admin/SignIn"))
const AddProduct = lazy(() => import("./components/admin/AddProduct"))
const EditProduct = lazy(() => import("./components/admin/EditProduct"))
const Orders = lazy(() => import("./pages/admin/Orders"))
const Customers = lazy(() => import("./pages/admin/Customers"))
const Reviews = lazy(() => import("./pages/admin/Reviews"))
const PrivateRoute = lazy(() => import("./pages/admin/Private"))
import Preloader from "./components/ui/Preloader"
import PageNotFound from "./pages/admin/PageNotFound"
import Home from "./pages/Home"
import Layout from "./components/ui/Layout"
import Product from "./pages/Product"
import ProductListing from "./pages/ProductListing"
import Contact from "./pages/Contact"

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Layout />,
      children:[
        {
          path: '/',
          element: <Home />
        },
        {
          path: '/collections',
          element: <Suspense fallback={<Preloader />}>
            <ProductListing />
          </Suspense>
        },
        {
          path: '/product/:slug',
          element: <Suspense fallback={<Preloader />}>
            <Product />
          </Suspense>
        },
        {
          path: '/contact',
          element: <Suspense fallback={<Preloader />}>
            <Contact />
          </Suspense>
        },
      ]
    },
    {
      path: '/admin',
      element: <Suspense fallback={<Preloader />}>
        <PrivateRoute />
      </Suspense>,

      children: [
        {
          path: 'products',
          element: <Suspense fallback={<Preloader />}>
            <Products />
          </Suspense>,
        },
        {
          path: 'products/:slug',
          element: <Suspense fallback={<Preloader />}>
            <EditProduct />
          </Suspense>,
        },

        {
          path: 'products/add',
          element: <Suspense fallback={<Preloader />}>
            <AddProduct />
          </Suspense>,
        },
        {
          path: 'dashboard',
          element: <Suspense fallback={<Preloader />}>
            <DashBoard />
          </Suspense>
        },

        {
          path: 'orders',
          element: <Suspense fallback={<Preloader />}>
            <Orders />
          </Suspense>
        },

        {
          path: 'customers',
          element: <Suspense fallback={<Preloader />}>
            <Customers />
          </Suspense>
        },

        {
          path: 'reviews',
          element: <Suspense fallback={<Preloader />}>
            <Reviews />
          </Suspense>
        }
      ]
    },

    {
      path: 'login',
      element: <Suspense fallback={<Preloader />}>
        <SignIn />
      </Suspense>
    },

    {
      path: '*',
      element: <Suspense fallback={<Preloader />}>
        <PageNotFound />
      </Suspense>
    },

  ])

  return (
    <RouterProvider router={router} />
  )
}

export default App
