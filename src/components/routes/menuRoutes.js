import { CartContainer } from "../pages/cart/CartContainer"
import { CheckoutContainer } from "../pages/chekout/CheckoutContainer"
import { Form } from "../pages/form/Form"
import { LoginContainer } from "../pages/login/LoginContainer"
import { ProductDetailContainer } from "../pages/productDetail/ProductDetailContainer"
import { ProductsListContainer } from "../pages/productlist/ProductsListContainer"

export const menuRoutes = [
  {
    id: "home",
    path: "/",
    Element: ProductsListContainer,
  },
  {
    id: "details",
    path: "/itemdetail/:id",
    Element: ProductDetailContainer,
  },
  {
    id: "category",
    path: "/category/:catName",
    Element: ProductsListContainer,
  },
  {
    id: "cart",
    path: "/cart",
    Element: CartContainer,
  },
  {
    id: "checkout",
    path: "/checkout",
    Element: CheckoutContainer,
  },
  {
    id: "login",
    path: "/login",
    Element: LoginContainer,
  },
]
