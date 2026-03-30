import Header from './Header'
import './App.css'
import MobileMenu from './MobileMenu';

function App() {

  const menuList = ["Collections","Men", "Women", "About", "Contact"];

  return (
    <>
      <Header datos={menuList} />    
    </>
  )
}

export default App
