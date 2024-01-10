import git from "../assets/git.png"
import mail from "../assets/mail.jpg"
import linkdn from "../assets/linkdin.png"
import inst from "../assets/insta.jpg"
import phone from "../assets/phone-circle.png"
import twitter from "../assets/twit.png"
const Contact=()=>{
    return(
        <div className="flex justify-center my-[100px] ">
        <div className="border-2 shadow-lg shadow-black ">
        <div className="flex justify-center text-[30px] py-3 font-kalnia">CONTACT ME</div>
        <div className="flex items-center">
          <img className="w-20" src={mail} alt="mail"/>
          <div className="font-bold">rahulreddypurmani123@gmail.com</div>
        </div>
        <div className="flex items-center ">
          <img className="w-12 mx-4" src={phone} alt="mail"/>
          <div className="font-bold  ">+91 8921316760</div>
        </div>
        <div className="flex justify-center my-5">
          <a href="https://github.com/rahulrangers"> <img className="w-16 mx-5" src={git} alt="git"/></a>
            <a href="https://www.linkedin.com/in/purmani-rahul-reddy-96b37a25a/"><img  className="w-16 mx-5" src={linkdn} alt="linkdn"/></a>
            <a href="https://www.instagram.com/rahulreddypurmani/"><img  className="w-16 mx-5"  src={inst} alt="inst"/></a>
            <a href="https://twitter.com/RahulRe76993621 "><img className="w-24" src={twitter} alt="twitter" /> </a>
        
        </div>
        </div>
        </div>
    )
}
export default Contact