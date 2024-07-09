import {BrowserRouter, Route, Routes} from 'react-router-dom';
import './App.css';
import {ReactLenis, useLenis} from 'lenis/react';

import CustomCursor from './components/CustomCursor/CustomCursor.jsx';
import NavBar from './components/NavBar/NavBar.jsx';
import Footer from './components/Footer/Footer.jsx';

import Home from './pages/Home/Home.jsx';
import Events from './pages/Events/Events.jsx';
import Competitions from './pages/Competitions/Competitions.jsx';
import Workshops from './pages/Workshops/Workshops.jsx';
import SocialCause from './pages/Social Cause/SocialCause.jsx';
import Accommodation from './pages/Accommodation/Accommodation.jsx';
import Team from './pages/Team/Team.jsx';

import {useEffect} from 'react';


function App() {
  const lenis = useLenis(({scroll}) => {
  });

  useEffect(() => {
    if (lenis) {
      lenis.options.lerp = 0.2;
      lenis.options.duration = 0.4;
    }
  }, [lenis]);

  return (
    <ReactLenis root>
      <BrowserRouter>
        <CustomCursor/>
        <Routes>
          <Route exact path='/' element={<>
            <NavBar/>
            <Home/>
            <Footer/>
          </>}/>
          <Route exact path='/events' element={<>
            <NavBar/>
            <Events/>
            <Footer/>
          </>}/>
          <Route exact path='/competitions' element={<>
            <NavBar/>
            <Competitions/>
            <Footer/>
          </>}/>
          <Route exact path='/workshops' element={<>
            <NavBar/>
            <Workshops/>
            <Footer/>
          </>}/>
          <Route exact path='/socialcause' element={<>
            <NavBar/>
            <SocialCause/>
            <Footer/>
          </>}/>
          <Route exact path='/accommodation' element={<>
            <NavBar/>
            <Accommodation/>
            <Footer/>
          </>}/>
          <Route exact path='/team' element={<>
            <NavBar/>
            <Team/>
            <Footer/>
          </>}/>
        </Routes>
      </BrowserRouter>
    </ReactLenis>
  );
}

export default App;
