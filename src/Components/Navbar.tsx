import { Link } from "react-router-dom"
import logo from "../assets/logo.png"
const Navbar=()=>{
 return(
    <div className=" flex justify-center text-[24px] font-bold  m-2"> 
    <Link to={"/"}>
      <div className=" m-3 ">Home</div>
      </Link>
      <Link to="/about">
      <div className=" m-3">About</div>
      </Link>
      <img  className=" w-16" src={logo} alt="RR"/>
      <Link to="/skills">
      <div className=" m-3">Skills</div>
      </Link>
      <Link to="/contact">
      <div className=" m-3">Contact</div>
      </Link>
    </div>
 )
}
export default Navbar