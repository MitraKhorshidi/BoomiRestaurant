import Link from "next/link";
import BottomNavbar from "./bottomNavbar";
import Contact from "./contact";

import { AiOutlineInstagram } from "react-icons/ai";
import { ImPinterest2 } from "react-icons/im";
import { RiFacebookCircleLine } from "react-icons/ri";

const Footer = () => {
    return(
        <div className="bg-title h-560 flex flex-row justify-evenly mt-52 text-slate-100 shadow-md">
            <div className="flex flex-col justify-center gap-y-10">
                <div className=" flex flex-row justify-evenly mt-16">
                    <div className="flex flex-col justify-center gap-y-6">
                        <p className="text-4xl text-white"><Link href='/'>Boomi Restaurant</Link></p>
                        <BottomNavbar/>
                    </div>
                    
                    <div className="flex flex-col justify-center mt-16 text-lg font-normal">
                        <p>4th floor , Melal Boutique Mall
                            <br/> Bosnia and Herzegovina St , Fereshte Ave , Tehran
                        </p>
                        <p className="text-lg">Every day from 12-23<br/> lunch : 12-16 , dinner : 19-23</p>
                    </div>

                    
                </div>
                <div className="flex flex-row gap-x-44">
                    <p className="text-lg">
                        Follow us On 
                        <div className="flex flex-row text-3xl gap-x-1">
                        <AiOutlineInstagram/> <ImPinterest2/> <RiFacebookCircleLine/>
                        </div>
                    </p> 
                    <Contact/>
                </div>
            </div>
            <div className="flex flex-col justify-center ">
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2333.6539360911947!2d51.42115365281302!3d35.79134063995327!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3f8e0672751b1753%3A0xed4d880692ab6ad3!2sMelal%20Boutique%20Mall!5e0!3m2!1sen!2s!4v1656420340809!5m2!1sen!2s"
                        className="rounded-md h-338 w-440 " 
                    ></iframe>
                    
            </div>
        </div>
        
    );
}
export default Footer;