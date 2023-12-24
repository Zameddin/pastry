
import './App.css';
import Header from './components/Header';
import Main from "./components/Main";
import Footer from './components/Footer';
import Vacancies from './components/Vacancies';
import About from "./components/About";
import Contact from "./components/Contacs";
import { Route,Routes } from 'react-router-dom';
import List from './components/List';
import { CartProvider } from 'react-use-cart';
import Snowfall from 'react-snowfall';
function App() {
  return (
    <div className="App">
      <CartProvider>
      <div className='snowfall' style={{position: 'relative' }}>
      <Header/>
      
      <Routes>
      <Route  path="/" element={<Main/>} />
      <Route path='/about' element={<About/>} />
      
      <Route path="/vacancies" element={<Vacancies/>} />
      <Route path="/contacts" element={<Contact/>} />
      <Route path='/list' element={<List/>}/>
    
      
    </Routes>
    
    <Snowfall />
       </div>
      
      </CartProvider>
    </div>
  );
}

export default App;
