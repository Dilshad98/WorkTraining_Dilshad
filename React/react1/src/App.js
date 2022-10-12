import './App.css';
import Home from './Home';
import About from './About';
import Contact from './Contact';
import ProductList from './ProductList.js';
import {BrowserRouter as Router,Routes,Route} from "react-router-dom";
import ClaCom from './ClaCom';
import Login from './Login';
import Register from './Register';
import UpdateUser from './UpdateUser';



function App() {
  return (
    <>
  
  
   <Router>
      <Routes>
          <Route path="/Home" element={<Home/>}/>          
          <Route path="/About" element={<About/>}/>  
          <Route path="/ProductList" element={<ProductList/>}/>        
          <Route path="/Contact" element={<Contact/>}/>
          <Route path="/claCom" element={<ClaCom/>}/>
          <Route path="/Login" element={<Login/>}/>
          <Route path="/Register" element={<Register/>}/>
          <Route path="/UpdateUser" element={<UpdateUser/>}/>
          <Route path="/" element={<Home/>}/>
      </Routes>
   </Router>

   </>
   
  );
}

export default App;
