import Base from "../../components/base";
import { AiOutlineInstagram } from "react-icons/ai";
import { ImPinterest2 } from "react-icons/im";
import { RiFacebookCircleLine } from "react-icons/ri";
import pic5 from "../../assets/images/pic5.jpg";
import pic6 from "../../assets/images/pic6.jpg";
import pic7 from "../../assets/images/pic7.jpg";
import team1 from "../../assets/images/team1.jpg";
import team2 from "../../assets/images/team2.jpg";
import team3 from "../../assets/images/team3.jpg";
import Button from "../../components/button";

const AboutPage= ()=>{
    return(
        <Base>
            <div className="flex flex-col gap-y-20 text-lg">

                <div className="flex flex-row justify-evenly items-baseline gap-x-20 ">
                    <div className="flex flex-col mt-16 gap-y-8">
                        <h1 className="text-5xl text-title font-medium">Boomi Restaurant</h1>
                        <p>4th floor , Melal Boutique Mall
                            <br/> Bosnia and Herzegovina St , Fereshte Ave , Tehran
                        </p>
                    </div>
                    <p className="self-senter">Every day from 12-23 <br/> lunch : 12-16 <br/> dinner : 19-23 <br/> cafe: 16-19</p>
                    <div className="flex flex-col gap-y-2 text-lg">
                        Follow us On 
                        <div className="flex flex-row text-3xl gap-x-1">
                        <AiOutlineInstagram/> <ImPinterest2/> <RiFacebookCircleLine/>
                        </div>
                        <p>Tel : 09563457 </p>
                    </div>
                    <div className="flex flex-col gap-y-2">
                        <Button href="/reservation" content="Book"/>
                        <Button href="/order" content="Order"/>
                    </div> 
                </div>

                {/* <div className="flex flex-row">
                    <img src={team1.src} className="h-52"/>
                    <img src={team2.src} className="h-52"/>
                    <img src={team3.src} className="h-52"/>
                </div> */}
            </div>
            
            
        </Base>
    );
}
export default AboutPage;