import { createBrowserRouter } from "react-router-dom";
import App from "src/App";
import About from "src/Pages/LandingPage/About/About/About";
import Blog from "src/Pages/LandingPage/Blog/Blog";
import Contact from "src/Pages/LandingPage/Contact/Contact";
import Home from "src/Pages/LandingPage/Home/Home/Home";
import PatientReg from "src/Pages/SalesRepresentative/PatientReg/PatientReg/PatientReg";
import PatientPayment from "src/Pages/SalesRepresentative/PatientReg/PatientRegSection/PatientPayment/PatientPayment";
import PatientRegistration from "src/Pages/SalesRepresentative/PatientReg/PatientRegSection/PatientRegistration/PatientRegistration";



const router = createBrowserRouter([
   {
      path: "/",
      element: <App></App>,
      children: [
         {
            path: "/",
            element: <Home></Home>
         },
         {
            path: "/about",
            element: <About></About>
         },
         {
            path: "/blog",
            element: <Blog></Blog>
         },
         {
            path: "/contact",
            element: <Contact></Contact>
         }
      ]
   },
   {
      path: "/salesrep/patientreg",
      element: <PatientReg></PatientReg>,
      children: [
         {
            path: "/salesrep/patientreg",
            element: <PatientRegistration></PatientRegistration>
         },

         {
            path: "payment",
            element: <PatientPayment></PatientPayment>
         }
      ]
   },

]);
export default router;