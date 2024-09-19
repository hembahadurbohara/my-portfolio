import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from './Componants/Home';
import Aboutmepage from './Componants/Aboutmepage';
import Contactpage from './Componants/Contactpage';
import Experiencepage from './Componants/Experiencepage';
import Skillspage from './Componants/Skillspage';
import Workpage from './Componants/Workpage';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/about' element={<Aboutmepage/>} />
          <Route path='/skills' element={ <Skillspage/>} />
          <Route path='/work' element={<Workpage/>} />
          <Route path='/experience' element={<Experiencepage/>} />
          <Route path='/contact' element={<Contactpage/>} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
