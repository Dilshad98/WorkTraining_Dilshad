
import './App.css';
import {BrowserRouter as Router,Routes,Route} from "react-router-dom";
import Pg from './Pg.js';
function App() {
  return (
   <>
       <Router>
        <Routes>
            <Route path="/Pg" element={<Pg/>}/>          
          

            <Route path="/" element={<Pg/>}/>
        </Routes>
   </Router>
   </>
  );
}

export default App;
