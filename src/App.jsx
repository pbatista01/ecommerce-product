import { useState } from 'react';
import Header from './Header'
import Hero from './Hero'
import './App.css'


function App() {

    const [cartCounter, setCartCounter] = useState(0);


  return (
    <>
      <Header count={cartCounter}/>    
      <Hero onAddToCart={setCartCounter} />
    </>
  )
}

export default App
