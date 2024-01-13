import image from "../assets/background.jpg";
import resume from "../assets/Resume.pdf"
import { Button } from "./ui/button"
const Home = () => {
  return (
    <>
    <div
      className="md:w-full md:h-[550px]   bg-cover bg-center "
      style={{ backgroundImage: `url(${image})` }}
    >
     <div className="px-32 py-40 "> 
     <div className="text-[50px] font-kalnia">Hi, I'M Rahul Reddy</div>
     <div className="font-bold flex flex-wrap md:w-[400px] lg:w-full ">I AM A SECOND YEAR UNDERGRAD AT COMPUTER SCIENCE DEPARTMENT, IIT JODHPUR.</div>
     <div className="font-bold">LOVE TO LEARN AND EXPLORE NEW TECHNOLOGIES</div>
     <div className="py-10 ">
     <Button onClick={()=>{
      const url = window.URL.createObjectURL(new Blob([resume]));
      const link = document.createElement('a');
      link.href = url;
      link.setAttribute('download','resume')
      document.body.appendChild(link)
      link.click();
      document.body.removeChild(link)
     }}>DOWNLOAD RESUME</Button>
     </div>
     </div>
    </div>
    </>
  );
};

export default Home;
