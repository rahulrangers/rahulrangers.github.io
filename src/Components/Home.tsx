import image from "../assets/background.jpg";
import { Button } from "./ui/button"
const Home = () => {
  const url =  "https://rahulrangers.github.io/SMU_PG_Resume_Template.pdf"
  const downloadresume=()=>{
    const file = url.split('/').pop()
    const link = document.createElement('a')
    link.href=url
    if(file)
    link.setAttribute("download",file)
    document.body.appendChild(link)
    link.click()
    link.remove();
  }
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
     <Button onClick={downloadresume}>DOWNLOAD RESUME</Button>
     </div>
     </div>
    </div>
    </>
  );
};

export default Home;
