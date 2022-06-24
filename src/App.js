import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './Components/Pages/Header';
import ProductListing from './Components/Pages/ProductListing';
import ProductDetail from './Components/Pages/ProductDetail';

function App() {
  return (
    <div className="App">
      <Header />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<ProductListing />} />
          <Route path="products/:productId" element={<ProductDetail />} />
          <Route>404 Page Not Found</Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
