
import './App.css'
import Hero from './components/Hero'
import Main from './components/Main'
import Navbar from './components/Navbar'
import Status from './components/Status'
const productsData = async () => {
  const res = await fetch('/productsData.json');
  return res.json();
}

const products = productsData();

function App() {


  return (
    <>
      <Navbar></Navbar>
      <Hero></Hero>
      <Status></Status>
      <Main products={products}></Main>
      
    </>
  )
}

export default App
