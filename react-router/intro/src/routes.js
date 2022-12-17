import Home from "./Home";
import Products from "./Products";
import Contacts from "./Contacts";
import PageNotFound from "./PageNotFound";

export const links = {
  Home: '/',
  Products: '/products',
  Contacts: '/contacts',
  PageNotFound: '*',
} 

export const routes = [
  {
    path: links.Home,
    Component: Home
  },
  {
    path: links.Products,
    Component: Products
  },
  {
    path: links.Contacts,
    Component: Contacts
  },
  {
    path: links.PageNotFound,
    Component: PageNotFound
  }
];