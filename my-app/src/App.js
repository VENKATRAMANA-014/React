import './App.css';
import { Route,Routes } from 'react-router-dom';
import Law from './components/Law';
import MyNav from './components/MyNav';
import Services from './components/Services';
import Contact from './components/Contact';
import MyChatbot from './components/chatB/Chat1';
import About from './components/About';
import LawTypes from './components/KeyFeatures/LawTypes';
import Constitution from './components/KeyFeatures/Lawtypes/Constitution';
import Civil from './components/KeyFeatures/Lawtypes/Civil';
import Corporate from './components/KeyFeatures/Lawtypes/Corporate';
import Criminal from './components/KeyFeatures/Lawtypes/Criminal';
import Cyber from './components/KeyFeatures/Lawtypes/Cyber';
import Environmental from './components/KeyFeatures/Lawtypes/Environmental';
import Family from './components/KeyFeatures/Lawtypes/Family';
import Intellectual from './components/KeyFeatures/Lawtypes/Intellectual';
import Labor from './components/KeyFeatures/Lawtypes/Labor';
import Tax from './components/KeyFeatures/Lawtypes/Tax';
import KeyFeatures from './components/KeyFeatures/KeyFeatures';
import FAQ from './components/FAQs/FAQ';
import Login from './components/Register/Login';
import Signin from './components/Register/Signin';
import Float from './components/FloatButton/Float';

function App() {
  return (
    <div className="App">

      <MyNav/>
    
      <Routes>
        
         <Route path='/' element={ <Law/> }/> 
         <Route path='/about' element={ <About/> }/>  
         <Route path='/services' element={ <Services/> }/> 
         <Route path='/contact' element={ <Contact/> }/> 
          <Route path='/chatbot' element={ <MyChatbot/> }/>
          <Route path='/KeyFeatures' element={<KeyFeatures/>}></Route>
          <Route path='/KeyFeatures/LawTypes' element={ <LawTypes/>}/>
          <Route path='/Lawtypes/constitution' element={ <Constitution/>}/>
          <Route path='/Lawtypes/civil' element={ <Civil/>}/>
          <Route path='/Lawtypes/corporate' element={ <Corporate/>}/>
          <Route path='/Lawtypes/criminal' element={ <Criminal/>}/>
          <Route path='/Lawtypes/cyber' element={ <Cyber/>}/>
          <Route path='/Lawtypes/environment' element={ <Environmental/>}/>
          <Route path='/Lawtypes/family' element={ <Family/>}/>
          <Route path='/Lawtypes/intellectual' element={ <Intellectual/>}/>
          <Route path='/Lawtypes/labor' element={ <Labor/>}/>
          <Route path='/Lawtypes/tax' element={ <Tax/>}/>
          <Route path='/FAQs' element={<FAQ/>}/>
          <Route path='/signin' element={<Signin/>}/>
          <Route path='/login' element={<Login/>}/>
          <Route path='/bot' element={<Float/>}/>
         

      </Routes>

    </div>
  );
}

export default App;






