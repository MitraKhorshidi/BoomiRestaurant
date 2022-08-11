import { useRef , useState } from "react";
import ReservInfo from "../../components/reservInfo";

export default function View(){

    const numRef=useRef();
    const userIdRef=useRef();

    const [res,setRes] = useState(undefined);
    async function search(event){
        event.preventDefault();

        const ReservationId=numRef.current.value;
        const userId=userIdRef.current.value;
        const data={ ReservationId,userId}

        const res = await fetch('/api/searchReservation'  , {
            method: 'POST' ,
            body:JSON.stringify(data)
        });
        
        console.log(res);
        if(res.status==200){
            const data =await res.json();
            console.log(data);
            setRes(data);
        }
        else{
            const error=await res.text();
            console.log(error)
            setRes({error:error});
        }
        
    }

    

    if(!res || res.error) return(<div className="flex flex-col justify-center items-center gap-y-8 text-lg my-20">
        <p>Enter yor reservation and phone number to view your reservation detail.</p>
        <form onSubmit={search}>
            <div className="flex flex-row gap-x-8">
                <div className="flex flex-col">
                    <p>reservation number : </p>
                    <input type="number" ref={numRef} className="border-1 border-slate-400 rounded-sm focus:border-black focus:ring-0 h-10 "/>
                </div>
                <div className="flex flex-col">
                    <p>phone number : </p>
                    <input type="tel" ref={userIdRef} className="border-1 border-slate-400 rounded-sm focus:border-black focus:ring-0 h-10 "/>
                </div>
            </div>
            <input type="submit" value="Search" className="bg-teal-300 hover:bg-teal-400 px-4 py-1 font-medium rounded-md shadow-sm mt-5"/>   
        </form>
        {res && res.error && <p>error:{res.error}</p>}

    </div>);

    return(
    <div className="flex flex-col justify-center items-center gap-y-5 mt-20">
        <ReservInfo reservationId={res.reservation_number} userId={res.userId} tableId={res.tableId} num={res.num} date={res.date}/>
        <p className="text-red-500 ">If you want to edit your reservation<br/> first cancel it then book a new one.</p>
    </div>
    )

}