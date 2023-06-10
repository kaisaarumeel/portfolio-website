
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import { Helmet } from 'react-helmet';
import { Route, Routes} from 'react-router-dom'
import Home from './components/Home.js';
import AboutMe from './components/aboutme';
import Contact from './components/contact.js';
import Projects from './components/projects.js';



function App() {

  return (
    <>
      <Helmet>
        <link rel="icon" href="KA.png" />
        <title>Kaisa Arumeel</title>
      </Helmet>

      <Routes>
          <Route index element={<Home/>} />
          <Route path='/home' element={<Home/>}/>
          <Route path='/aboutme' element={<AboutMe/>}/>
          <Route path='/contact' element={<Contact/>}/>
          <Route path='/projects' element={<Projects/>}/>
          
        </Routes>
    </>
  
  )
}

export default App
