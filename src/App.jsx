import './App.css'
import Maincontent from './components/Maincontent';
import NavBAr from './components/NavBAr'
import ProductDescription from './components/ProductDescription';
import Mycontext from './ContextAPI/Mycontext';
import Cart from './components/Cart'
import {BrowserRouter, Routes, Route} from 'react-router-dom';

function App() {

  return (
    <Mycontext>
      <div className=''>
        <BrowserRouter>
          <NavBAr/>
          <Routes>
            <Route path='/' element={<Maincontent/>}></Route>
            <Route path='/product/:id' element={<ProductDescription/>}></Route>
            <Route path='/products/cart' element={<Cart/>}></Route>
          </Routes>
        </BrowserRouter>
        
        
      </div>
    </Mycontext>
  )
}

export default App
