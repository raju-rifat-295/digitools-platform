
import { useState } from 'react'
import './App.css'
import Hero from './components/Hero'
import Main from './components/Main'
import Navbar from './components/Navbar'
import Status from './components/Status'
import Steps from './components/Steps'
import Pricing from './components/Pricing'
const productsData = async () => {
  const res = await fetch('/productsData.json');
  return res.json();
}

const products = productsData();

function App() {
  const [cartTip,setCartTip]=useState(0);

  return (
    <>
      <Navbar cartTip={cartTip}></Navbar>
      <Hero></Hero>
      <Status></Status>
      <Main setCartTip={setCartTip} products={products}></Main>
      <Steps></Steps>
      <Pricing></Pricing>
    </>
  )
}

export default App
