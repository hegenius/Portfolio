import './App.css'
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Home from "./pages/Home.jsx";
import About from "./pages/About.jsx";
import OurWay from "./pages/OurWay.jsx";
import Brand from "./pages/Brand.jsx";
import MediaHub from "./pages/MediaHub.jsx";
import Product from "./pages/Product.jsx";
import ErrorPage from "./pages/ErrorPage.jsx";
import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";

function App() {
  return (
    <BrowserRouter>
      <Header/>
      <Routes>
        <Route path={'/'} element={<Home />}/>
        <Route path={'/about'} element={<About />} />
        <Route path={'/ourway'} element={<OurWay />} />
        <Route path={'/brand'} element={<Brand />} />
        <Route path={'/mediahub'} element={<MediaHub />} />
        <Route path={'/product'} element={<Product />} />
        <Route path={'*'} element={<ErrorPage />} />
      </Routes>
      <Footer/>
    </BrowserRouter>
  )
}

export default App
