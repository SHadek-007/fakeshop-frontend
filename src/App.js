import './App.css';
import Header from './Pages/Header/Header';
import { Routes, Route } from 'react-router-dom';
import Home from './Pages/Home/Home';
import ProductDetails from './Pages/ProductDetails/ProductDetails';

function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/:id' element={<ProductDetails></ProductDetails>}></Route>
      </Routes>
    </div>
  );
}

export default App;
