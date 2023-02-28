import './App.css';
import Home from './pages/user/Home';
import Login from './pages/Login'
import Signup from './pages/Signup'
import AddProduct from './pages/admin/AddProduct'
import AddShop from './pages/admin/AddShop'
import Floors from './pages/admin/Floors'
import Products from './pages/admin/Products'
import Shops from './pages/admin/Shops'
import UserProduct from './pages/user/products'
import { Route, Routes } from "react-router-dom";
import AllProducts from './pages/admin/AllProducts';
import ProductDetail from './pages/user/ProductDetail'


function App() {
  return (
    <>

      <Routes>
        <Route path='/login' element={<Login />} />
        <Route path='/' element={<Home />} />
        <Route path='/signup' element={<Signup />} />
        <Route path='/addproduct' element={<AddProduct />} />
        <Route path='/addshop' element={<AddShop />} />
        <Route path='/floors' element={<Floors />} />
        <Route path='/products' element={<Products />} />
        <Route path='/shops' element={<Shops />} />
        <Route path='/userProducts' element={<UserProduct />} />
        <Route path='/allProducts' element={<AllProducts />} />
        <Route path='/productDetail' element={<ProductDetail />} />
      </Routes>

    </>
  );
}

export default App;
