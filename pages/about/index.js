import Base from "../../components/base";
import pic5 from "../../assets/images/pic5.jpg";
import pic6 from "../../assets/images/pic6.jpg";
import pic7 from "../../assets/images/pic7.jpg";
import team1 from "../../assets/images/team1.jpg";
import team2 from "../../assets/images/team2.jpg";
import team3 from "../../assets/images/team3.jpg";

const AboutPage= ()=>{
    return(
        <Base>
            <div className="flex flex-col ">
                <div className="flex flex-row justify-evenly mx-auto">
                    <div className="flex flex-row">
                        <img src={pic5.src} className="h-52"/>
                        <img src={pic6.src} className="h-52"/>
                        <img src={pic7.src} className="h-52"/>
                    </div>
                    <div className="flex flex-col justify-center mt-16 text-lg font-normal">
                        <h1>Boomi Restaurant</h1>
                        <p>4th floor , Melal Boutique Mall
                            <br/> Bosnia and Herzegovina St , Fereshte Ave , Tehran
                        </p>
                        <p className="text-lg">Every day from 12-23<br/> lunch : 12-16 , dinner : 19-23 , cafe: 16-19</p>
                    </div>
                </div>
                <div className="flex flex-row">
                    <img src={team1.src} className="h-52"/>
                    <img src={team2.src} className="h-52"/>
                    <img src={team3.src} className="h-52"/>
                </div>
            </div>
            
            
        </Base>
    );
}
export default AboutPage;