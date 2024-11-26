import './App.css';
import Details from './components/Details';
import LandingPage from './components/LandingPage';
import 'animate.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Template from './components/Template';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<LandingPage/>}/>
          <Route path='/details' element={<Details/>}/>
          <Route path='/portfolio' element={<Template/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
