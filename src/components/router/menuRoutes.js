import ItemListContainer from "../pages/itemList/ItemListContainer";
import ItemDetailContainer from "../pages/itemDetail/ItemDetailContainer";
import CartContainer from "../pages/cart/CartContainer";
import CheckoutContainer from "../pages/checkout/CheckoutContainer";
import FormFormik from "../pages/formFormik/FormFormik";
export const routes = [
  {
    id: "home",
    path: "/",
    Element: ItemListContainer,
  },
  {
    id: "category",
    path: "/category/:categoryName",
    Element: ItemListContainer,
  },
  {
    id: "detail",
    path: "/itemDetail/:id",
    Element: ItemDetailContainer,
  },
  {
    id: "cart",
    path: "/cart",
    Element: CartContainer,
  },
  {
    id: "checkout",
    path: "/checkout",
    Element: FormFormik,
  },
  {
    id: "formik",
    path: "/formik",
    Element: FormFormik,
  }
];