import Link from "next/link";

export default function ReservInfo({reservationId,userId,tableId,num,date}){
    return(
    <div className="text-lg flex flex-col justify-center gap-y-4 mx-auto my-auto">
        <p className="font-medium">Reservation Number : {reservationId}</p>
        <table className="table-fixed border-separate border  border-slate-400">
            <tr>
                <td className="border border-slate-300 p-2">phone number</td>
                <td className="border border-slate-300 text-center">{userId}</td>
            </tr>
            <tr>
                <td className="border border-slate-300 p-2">table number</td>
                <td className="border border-slate-300 text-center">{tableId}</td>
            </tr>
            <tr>
                <td className="border border-slate-300 p-2">number of people</td>
                <td className="border border-slate-300 text-center">{num}</td>
            </tr>
            <tr>
                <td className="border border-slate-300 p-2">date </td>
                <td className="border border-slate-300 text-center">{date}</td>
            </tr>
        </table>
        <div className="flex flex-row justify-center items-center gap-x-5">
            <div className="px-2 py-1 bg-teal-300 rounded-md shadow-sm"><Link href={'/reservation'}>ok</Link></div>
            <div className="px-2 py-1 bg-red-300 rounded-md shadow-sm"><Link href={'/'}>cancel</Link></div>
        </div>
        
    </div>
    
    );
}