import { useRef , useState } from "react";
import Base from "../../components/base";
import ReservInfo from "../../components/reservInfo";
import { apiSearchReservation } from "../../data/api";

export default function View(){

    const reservationIdRef=useRef();
    const userIdRef=useRef();

    const [res,setRes] = useState(undefined);
    async function search(event){
        event.preventDefault();

        const reservationId=reservationIdRef.current.value;
        const userId=userIdRef.current.value;
        
        try{
            const res= await apiSearchReservation(reservationId,userId);
            setRes(res);
        }
        catch(err){
            setRes({error: err.message})
        }
        
    }

    function onOk(){setRes(undefined)}

    

    if(!res || res.error) return(
    <Base>
        <div className="flex flex-col justify-center items-center gap-y-8 text-lg my-20">
            <p>Enter yor reservation and phone number to view your reservation detail.</p>
            <form onSubmit={search}>
                <div className="flex flex-row gap-x-8">
                    <div className="flex flex-col">
                        <p>reservation number : </p>
                        <input type="number" ref={reservationIdRef} className="border-1 border-slate-400 rounded-sm focus:border-black focus:ring-0 h-10 "/>
                    </div>
                    <div className="flex flex-col">
                        <p>phone number : </p>
                        <input type="tel" ref={userIdRef} className="border-1 border-slate-400 rounded-sm focus:border-black focus:ring-0 h-10 "/>
                    </div>
                </div>
                <input type="submit" value="Search" className="bg-teal-300 hover:bg-teal-400 px-4 py-1 font-medium rounded-md shadow-sm mt-5"/>   
            </form>
            {res && res.error && <p>error:{res.error}</p>}

        </div>
    </Base>);
    

    return(
    <Base>
        <div className="flex flex-col justify-center items-center gap-y-5 mt-20">
            <ReservInfo reservation={res} onOk={onOk}/>
            <p className="text-red-500 ">If you want to edit your reservation<br/> first cancel it then book a new one.</p>
        </div>
    </Base>
    
    )

}