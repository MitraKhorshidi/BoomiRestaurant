import Base from "../../components/base";
import pic1 from "../../assets/images/pic1.jpg";
import pic2 from "../../assets/images/pic2.jpg";
import pic3 from "../../assets/images/pic3.jpg";
import pic4 from "../../assets/images/pic4.jpg";
import Reservation from "../../components/reservation";




const ReservationPage =()=>{
    return(
        <Base>
            <div className="flex flex-row justify-around mt-5">
                <Reservation/>
                <div className="flex flex-col gap-y-2">
                    <div className="flex flex-col justify-end items-center z-0 bg-pink-100 w-96 h-560 shadow-sm mx-auto text-center">
                        <div className="w-1/3 h-4 bg-title -mb-1.5 shadow-md"></div>
                    </div>
                    <div className="flex flex-row gap-x-2 z-10 -mt-530">
                        <img src={pic1.src} className="w-72 rounded-tl-md"/>
                        <img src={pic2.src} className="w-52 rounded-tr-md"/>
                    </div>
                    <div className="flex flex-row gap-x-2 z-10">
                        <img src={pic3.src} className="w-60 rounded-bl-md"/>
                        <img src={pic4.src} className="w-64 rounded-br-md"/>
                    </div>
                    
                    
                </div>
            </div>
        </Base>
    );
    }
export default ReservationPage;