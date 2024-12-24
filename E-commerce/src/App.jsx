import './App.css'
import { BrowserRouter,Routes,Route, Outlet } from 'react-router-dom'
import {Header} from "./component/NavBar"
import { AuthPage} from './pages/AuthPage'
import { Product } from './pages/Product'
import { LandingPage } from './pages/LandingPage'
import { Cart } from './pages/Cart'
import { ErrorPage } from './pages/ErrorPage'
import { BuisnessAuth } from './pages/BuisnessAuth'
import { ProductListed } from './component/ProductListed'
import { ProductListing } from './component/ProductListing'
import { Buisness } from './pages/Business'


function App() {
  function Layout(out){
    return<div style={{height:"100vh"}}>
      <Header />
      <div style={{height:"90vh"}}>
      <div className='flex'>
      <Outlet />
      </div>
        
      </div>
     Footer
    </div>
  }

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route path="/auth" element={<AuthPage />} />
            <Route path='/product' element={<Product  />} />
            <Route path="/" element={<LandingPage  />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/Buisness" element={<Buisness />} />
            <Route path="/buisnessauth" element={<BuisnessAuth />} />
            <Route path="/ProductListed" element={<ProductListed />}/>
            <Route path="/ProductListing" element={<ProductListing />}/>
            <Route path="*" element={<ErrorPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
