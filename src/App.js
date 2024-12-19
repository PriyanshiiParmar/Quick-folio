import './App.css';
import Details from './components/Details';
import LandingPage from './components/LandingPage';
import 'animate.css'
import Form from './components/Form';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Template from './components/Template';
import ExperienceDetails from './components/ExperienceDetails';
import { Provider } from 'react-redux';
import appStore from './store/appStore';
import Shimmer from './components/Shimmer';
import ResumeForm from './components/ResumeForm';
import GeneratedResume from './components/GenerateResume';
import { useState } from 'react';
function App() {
  const [resumeData, setResumeData] = useState(null); 
  return (
    <div className="App">
      <Provider store={appStore}>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<LandingPage/>}/>
          <Route path='/details' element={<Details/>}/>
          <Route path='/form' element={<Form/>}/>
          <Route path='/getExperience' element={<ExperienceDetails/>}/>
          <Route path="/resumeForm" element={<ResumeForm setResumeData={setResumeData} />} />
          <Route path="/generated-resume" element={<GeneratedResume resumeData={resumeData} />} />
          <Route path='/portfolio' element={<Template/>}/>
        </Routes>
      </BrowserRouter>
      </Provider>
    </div>
  );
}

export default App;
