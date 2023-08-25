
import React from 'react'
import Navbar from './Navbar'
import Home from './Home'
import About from './About'
import Courses from './Courses'
import Contact from './Contact'
import Footer from './Footer'
import { BrowserRouter as Router, Switch, Route  } from "react-router-dom";
import Particle from './Particle'


function App() {
  return (
    
    <Router>  
      {/* <Particle/>  */}
      <Navbar/>

    <>
    
      <Switch>
        <Route exact path='/'>
          
         <Home/>
         <About/>
         <Courses/>
         <Contact/>
         <Footer/>
        </Route>
        

        <Route path='/home'>
         <Home/>
         <Footer/>
        </Route>

        
        <Route path='/about'>
         <About/>
         <Footer/>
        </Route>
        
        <Route path='/courses'>
         <Courses/>
         <Footer/>
        </Route>
        
        <Route path='/contact'>
         <Contact/>
         <Footer/>
        </Route>
 
        
   
      </Switch>
    </>
     </Router>
  )
}

export default App;