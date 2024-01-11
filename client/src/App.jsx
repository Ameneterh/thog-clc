import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import PrivateRoutes from "./components/PrivateRoutes";
import OnlyAdminPrivateRoutes from "./components/OnlyAdminPrivateRoutes";
import ScrollToTop from "./components/ScrollToTop";
import Header from "./components/Header";
import FooterCom from "./components/FooterCom";
import Home from "./pages/Home";
import About from "./pages/About";
import Blog from "./pages/Blog";
import ContactUs from "./pages/ContactUs";
import Sermons from "./pages/Sermons";

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/blog-posts" element={<Blog />} />
        <Route path="/contact-us" element={<ContactUs />} />
        <Route path="/sermons" element={<Sermons />} />
        <Route element={<PrivateRoutes />}></Route>
        <Route element={<OnlyAdminPrivateRoutes />}></Route>
      </Routes>
      <FooterCom />
    </BrowserRouter>
  );
}
