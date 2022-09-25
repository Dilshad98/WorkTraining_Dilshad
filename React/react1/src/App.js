import './App.css';
import Home from './Home';
import About from './About';
import Contact from './Contact';
import ProductList from './ProductList.js';
import {BrowserRouter as Router,Routes,Route} from "react-router-dom";



function App() {
  return (
    <>
  
  
   <Router>
      <Routes>
          <Route path="/Home" element={<Home/>}/>          
          <Route path="/About" element={<About/>}/>  
          <Route path="/ProductList" element={<ProductList/>}/>        
          <Route path="/Contact" element={<Contact/>}/>

          <Route path="/" element={<Home/>}/>
      </Routes>
   </Router>

   </>
   
  );
}

export default App;
