import './App.css';
import Home from './Home';
import About from './About';
import Products from './Products';
import Fashion from './Fashion';
import News from './News';
import Contact from './Contact';
import {BrowserRouter as Router,Routes,Route} from "react-router-dom";




function App() {
  return (
    <>
      <Router>
          <Routes>
              <Route path="/Home" element={<Home/>}/>          
              <Route path="/About" element={<About/>}/>  
              <Route path="/Products" element={<Products/>}/> 
              <Route path="/Fashion" element={<Fashion/>}/> 
              <Route path="/News" element={<News/>}/>    
              <Route path="/Contact" element={<Contact/>}/> 

              <Route path="/" element={<Home/>}/>
          </Routes>
      </Router>
   </>
   
  );
}

export default App;