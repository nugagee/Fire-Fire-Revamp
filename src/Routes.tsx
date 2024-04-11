import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import App from "./App";
import Landing from "./pages/Landing";
import AboutUs from "./pages/about-us/AboutUs";
import ContactUs from "./pages/contact-us/ContactUs";
import BlogPost from "./pages/blog/BlogPost";
import Services from "./pages/services/Services";
import Testimonials from "./pages/testimonials/Testimonials";

export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route index={true} path="/" element={<Landing />} />
      <Route index={true} path="/about-us" element={<AboutUs />} />
      <Route index={true} path="/contact-us" element={<ContactUs />} />
      <Route index={true} path="/blog" element={<BlogPost />} />
      <Route index={true} path="/services" element={<Services />} />
      <Route index={true} path="/testimonials" element={<Testimonials />} />
    </Route>
  )
);
