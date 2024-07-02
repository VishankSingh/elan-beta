import {BrowserRouter, Route, Routes} from "react-router-dom";
import './App.css'
import ReactLenis from "lenis/react";

import CustomCursor from "./components/CustomCursor/CustomCursor.jsx";
import NavBar from "./components/NavBar/NavBar.jsx";
import Footer from "./components/Footer/Footer.jsx";

import Home from "./pages/Home/Home.jsx";
import Events from "./pages/Events/Events.jsx";
import Competitions from "./pages/Competitions/Competitions.jsx";
import Workshops from "./pages/Workshops/Workshops.jsx";
import SocialCause from "./pages/Social Cause/SocialCause.jsx";
import Accommodation from "./pages/Accommodation/Accommodation.jsx";
import Team from "./pages/Team/Team.jsx";


function App() {

  return (
    <ReactLenis root>
      <BrowserRouter>
        <CustomCursor />
        <Routes>
          <Route exact path="/" element={<>
            <NavBar textColor={"#ffffff"}/>
            <Home />
            <Footer textColor={'#000000'} secondTextColor={'#a1a1a1'} bgColor={'#ffffff'}/>
          </>}/>
          <Route exact path="/events" element={<>
            <NavBar  textColor={"#ffffff"}/>
            <Events />
            <Footer textColor={'#000000'} secondTextColor={'#a1a1a1'} bgColor={'#ffffff'}/>
          </>}/>
          <Route exact path="/competitions" element={<>
            <NavBar textColor={"#ffffff"}/>
            <Competitions />
            <Footer textColor={'#000000'} secondTextColor={'#a1a1a1'} bgColor={'#ffffff'}/>
          </>}/>
          <Route exact path="/workshops" element={<>
            <NavBar textColor={"#ffffff"}/>
            <Workshops />
            <Footer textColor={'#000000'} secondTextColor={'#a1a1a1'} bgColor={'#ffffff'}/>
          </>}/>
          <Route exact path="/socialcause" element={<>
            <NavBar textColor={"#ffffff"}/>
            <SocialCause />
            <Footer textColor={'#000000'} secondTextColor={'#a1a1a1'} bgColor={'#ffffff'}/>
          </>}/>
          <Route exact path="/accommodation" element={<>
            <NavBar textColor={"#ffffff"}/>
            <Accommodation />
            <Footer textColor={'#000000'} secondTextColor={'#a1a1a1'} bgColor={'#ffffff'}/>
          </>}/>
          <Route exact path="/team" element={<>
            <NavBar textColor={"#ffffff"}/>
            <Team />
            <Footer textColor={'#000000'} secondTextColor={'#a1a1a1'} bgColor={'#ffffff'}/>
          </>}/>


        </Routes>
      </BrowserRouter>
    </ReactLenis>
  )
}

export default App
