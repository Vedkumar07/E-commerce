import './App.css'
import { BrowserRouter,Routes,Route, Outlet } from 'react-router-dom'
import {Header} from "./component/NavBar"
import { AuthPage} from './pages/AuthPage'
import { HomePage } from './pages/LandingPage'
import { ErrorPage } from './pages/ErrorPage'
import { BuisnessAuth } from './pages/BuisnessAuth'
import { ProductListed } from './component/ProductListed'
import { ProductListing } from './component/ProductListing'
import { Buisness } from './pages/Business'
import { Account } from './pages/Account'
import { Purchese } from './component/Purchese'
import { AddToCart } from './component/AddToCart'
import { ProductPage } from './component/ProductPage'


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
            <Route path="/" element={<HomePage  />} />
            <Route path="/Buisness" element={<Buisness />} />
            <Route path="/buisnessauth" element={<BuisnessAuth />} />
            <Route path="/ProductListed" element={<ProductListed />}/>
            <Route path="/ProductListing" element={<ProductListing />}/>
            <Route path="*" element={<ErrorPage />} />
            <Route path="/Account" element={<Account />} />
            <Route path="/Purchase" element={<Purchese />} />
            <Route path="/AddToCart" element={<AddToCart />} />
            <Route path='/ProductPage' element={<ProductPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
