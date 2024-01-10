import Navbar from "./Components/Navbar"
import Home from "./Components/Home"
import Contact from "./Components/Contact"
import Skills from "./Components/Skills"
import { BrowserRouter,Route,Routes } from "react-router-dom"
import About from "./Components/About"
const App= ()=>{
return(
  <>
  <BrowserRouter>
<Navbar/>
<Routes>
  <Route path="/" element={<Home/>}/>
  <Route path="/contact" element={<Contact/>}/>
  <Route path="/about" element={<About/>}/>
  <Route path="/skills" element={<Skills/>}/>
</Routes>
  </BrowserRouter>
  </>
)
}
export default App