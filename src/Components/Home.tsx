import image from "../assets/background.jpg";
import { Button } from "./ui/button"
const Home = () => {
  return (
    <>
    <div
      className="w-full h-[550px]  bg-cover bg-center "
      style={{ backgroundImage: `url(${image})` }}
    >
     <div className="px-32 py-40 "> 
     <div className="text-[50px] font-kalnia">Hi, I'M Rahul Reddy</div>
     <div className="font-bold">I AM A SECOND YEAR UNDERGRAD AT COMPUTER SCIENCE DEPARTMENT, IIT JODHPUR.</div>
     <div className="font-bold">LOVE TO LEARN AND EXPLORE NEW TECHNOLOGIES</div>
     <div className="py-10 ">
     <Button>DOWNLOAD RESUME</Button>
     </div>
     </div>
    </div>
    </>
  );
};

export default Home;
