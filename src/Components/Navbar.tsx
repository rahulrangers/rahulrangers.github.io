import { Link } from "react-router-dom"
import logo from "../assets/logo.png"
const Navbar=()=>{
 return(
    <div className=" flex justify-center sm:text-[24px] text-[16px] font-bold m-2 border-2 border-black"> 
    <Link to={"/"}>
      <div className=" m-3 ">Home</div>
      </Link>
      <Link to="/about">
      <div className=" m-3">About</div>
      </Link>
      <Link to={"/details"}>
      <img  className=" w-14" src={logo} alt="RR"/>
      </Link>
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