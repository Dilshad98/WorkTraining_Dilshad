import Home from './Home';
import About from './About';
import Product from './Product';
import Blog from './Blog';
import SinglePost from './SinglePost';
import Contact from './Contact';
import './App.css';
import {BrowserRouter as Router,Routes,Route} from "react-router-dom";

function App() {
  return (
    <>
      <Router>
          <Routes>
              <Route path="/Home" element={<Home/>}/>          
              <Route path="/About" element={<About/>}/>
              <Route path="/Product" element={<Product/>}/> 
              <Route path="/Blog" element={<Blog/>}/> 
              <Route path="/SinglePost" element={<SinglePost/>}/>    
              <Route path="/Contact" element={<Contact/>}/>  

              <Route path="/" element={<Home/>}/>
          </Routes>
      </Router>
     </>
  );
}

export default App;
