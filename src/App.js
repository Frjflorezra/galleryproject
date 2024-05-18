import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Italia1 from './components/Italia1';
import Italia2 from './components/Italia2';
import Italia3 from './components/Italia3';
import Italia4 from './components/Italia4';
import Italia5 from './components/Italia5';
import Italia6 from './components/Italia6';
import Italia7 from './components/Italia7';
import Italia8 from './components/Italia8';
import Italia9 from './components/Italia9';
import Italia10 from './components/Italia10';
import Navigation from './components/Navigation';



function App() {
  return (
    <Router >
      <Routes>
        <Route path="/italia1" element={<Italia1/>}/>
        <Route path="/italia2" element={<Italia2/>}/>
        <Route path="/italia3" element={<Italia3/>}/>
        <Route path="/italia4" element={<Italia4/>}/>
        <Route path="/italia5" element={<Italia5/>}/>
        <Route path="/italia6" element={<Italia6/>}/>
        <Route path="/italia7" Component={Italia7}/>
        <Route path="/italia8" element={<Italia8/>}/>
        <Route path="/italia9" element={<Italia9/>}/>
        <Route path="/italia10" element={<Italia10/>}/>
      </Routes>
      <Navigation/>
      
    </Router>
  );
}

export default App;  
