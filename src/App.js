import React from "react"
import Home from "./Components/Home/Home"
import Navbar from "./Components/Navbar/Navbar"
import About from "./Components/About/About"
import Events from "./Components/Events"
import Gallery from "./Components/Gallery/Gallery"
import Volunteer from "./Components/Volunteer/Volunteer"
import Contact from "./Components/Contact/Contact"
import { BrowserRouter as Router, Switch, Route, BrowserRouter } from "react-router-dom"

//npm install react-router-dom@5

function App() {
  return (
    <div>
      <BrowserRouter>
      <Router>
        <Navbar />
        <Switch>
          <Route path='/' index element={<Home/>} >
          </Route>
          <Route path='/about' element={<About/>} >
          </Route>
          <Route path='/Events' element={<Events/>} >
          </Route>
          <Route path='/Gallery' element={<Gallery/>} >
          </Route>
          <Route path='/Volunteer' element={<Volunteer/>} >
          </Route>
          <Route path='/Contact' element={<Contact/>} >
          </Route>
        </Switch>
      </Router>
      </BrowserRouter>
    </div>
  )
}

export default App
