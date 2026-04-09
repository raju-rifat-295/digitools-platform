
import { useState } from 'react'
import './App.css'
import Hero from './components/Hero'
import MainSec from './components/MainSec'
import Navbar from './components/Navbar'
import Status from './components/Status'
import Steps from './components/Steps'
import Pricing from './components/Pricing'
import WorkFlow from './components/WorkFlow'
import Footer from './Footer'
import { ToastContainer } from 'react-toastify'

const productsData = async () => {
  const res = await fetch('/productsData.json');
  return res.json();
}

const products = productsData();

function App() {
  const [cartTip, setCartTip] = useState(0);

  return (
    <>
      <Navbar cartTip={cartTip}></Navbar>
      <Hero></Hero>
      <Status></Status>
      <MainSec setCartTip={setCartTip} products={products}></MainSec>
      <Steps></Steps>
      <Pricing></Pricing>
      <WorkFlow></WorkFlow>
      <Footer></Footer>
      <ToastContainer />
    </>
  )
}

export default App
