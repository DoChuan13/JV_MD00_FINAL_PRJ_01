import IndexPage from "../pages/dashboard/indexPage/IndexPage";
import ProductsPage from "../pages/dashboard/productsPage/ProductsPage";
import AboutPage from "../pages/dashboard/aboutPage/AboutPage";
import ClientPage from "../pages/dashboard/clientPage/ClientPage";
import ContactPage from "../pages/dashboard/contactPage/ContactPage";
import LoginPage from "../pages/loginPage/LoginPage";
import RegisterPage from "../pages/registerPage/RegisterPage";

/*Private Router*/
import UserPage from "../pages/dashboard/userPage/UserPage";
import FavoritePage from "../pages/dashboard/favoritePage/FavoritePage";
import CartPage from "../pages/dashboard/cartPage/CartPage";

/*Protected Router*/
import AdminPage from "../pages/adminPage/AdminPage";
import AdminLayout from "../components/admin/detail/AdminLayout";

/*Error Page*/
import Error403Page from "../pages/dashboard/resultPage/Error403Page";
import Error404Page from "../pages/dashboard/resultPage/Error404Page";
import Error500Page from "../pages/dashboard/resultPage/Error500Page";

/*Lazy Router*/
// import Lazy = React.lazy(()=>import('../../LazyComponent'))

export const index = {
  path: "/",
  page: <IndexPage />,
};

export const products = {
  path: "/products",
  page: <ProductsPage />,
};

export const about = {
  path: "/about",
  page: <AboutPage />,
};

export const client = {
  path: "/client",
  page: <ClientPage />,
};

export const contact = {
  path: "/contact",
  page: <ContactPage />,
};

export const login = {
  path: "/login",
  page: <LoginPage />,
};

export const register = {
  path: "/register",
  page: <RegisterPage />,
};

//Private Router
export const user = {
  path: "/user",
  page: <UserPage />,
};

export const cart = {
  path: "/cart",
  page: <CartPage />,
};

export const favorite = {
  path: "/favorite",
  page: <FavoritePage />,
};

//Protected Router
export const admin = {
  path: "/admin",
  page: <AdminPage />,
};

export const adminDetailDefault = {
  path: "/admin/:detail/",
  page: <AdminLayout />,
};

export const adminDetail = {
  path: "/admin/:detail/:id",
  page: <AdminLayout />,
};

//Error Forbidden 403
export const error403 = {
  path: "/forbidden",
  page: <Error403Page />,
};

//Error No Page 404
export const error404 = {
  path: "*",
  page: <Error404Page />,
};

//Error No Page 500
export const error500 = {
  path: "/error",
  page: <Error500Page />,
};

// export const lazy = {
//   path: "/lazy",
//   page: <LazyComponent />,
// };
