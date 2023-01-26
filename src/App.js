
import './styles.css';
import Navbar from './Navbar';

import About from './pages/About';
import Works from './pages/Works';
import Contact from './pages/Contact';
import Home from './pages/Home';





function App() {
  let component
  switch(window.location.pathname){
    case '/': 
    component =  <Home />
    break

   case '/about':
      component = <About/>
      break

    case "/current":
        component = <Works/>
        break

    case '/contact':
      component = <Contact/>
      break


  }
  return (<>
 <Navbar/>

   {component}
  
  
   </>
  )
}

export default App;
