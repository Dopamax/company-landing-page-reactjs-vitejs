import {BrowserRouter,Routes,Route} from "react-router-dom";
import '../src/assets/css/style.css';
import 'bootstrap/dist/css/bootstrap.css';
import '../src/assets/css/theme-style.css';
import AboutUsPage from './Pages/AboutUs/AboutUsPage';
import ContactPage from './Pages/Contact/ContactPage';
import Home from './Pages/Home/Home'
import ServicesPage from './Pages/Services/ServicesPage';
import SkillsPage from './Pages/Skills/SkillsPage';
import PortfolioPage from "./Pages/Portfolio/PortfolioPage";

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Home/>}/>
        <Route exact path="/Services" element={<ServicesPage/>}/>
        <Route exact path="/AboutUs" element={<AboutUsPage/>}/>
        <Route exact path="/Skills" element={<SkillsPage/>}/>
        <Route exact path="/Portfolio" element={<PortfolioPage/>}/>
        <Route exact path="/Contact" element={<ContactPage/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
