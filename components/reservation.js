import Link from "next/link";
import { useState } from "react";
import Button from "./button";

const Reservation = () =>{

    const [edit , showEdit] = useState(false);
    const editPart =()=>{showEdit(true);}


    return(
        <div className="flex flex-col gap-y-10 ">
            <form className="flex flex-row gap-x-6 text-lg font-normal ">
                <div className="flex flex-col gap-y-1">
                    <p>Name</p>
                    <input type="text" className="border-1 border-slate-400 rounded-sm focus:border-black focus:ring-0 h-10"/>
                    <p>Number of People</p>
                    <input type="number" className="border-1 border-slate-400 rounded-sm focus:border-black focus:ring-0 h-10"/>
                    <p>Table Number</p>
                    <input type="number" className="border-1 border-slate-400 rounded-sm focus:border-black focus:ring-0 h-10"/>
                    <input type="submit" value="Book" className="bg-teal-300 hover:bg-teal-400 px-4 py-1 font-medium rounded-md shadow-sm self-start mt-5"/>
                </div>
                <div className="flex flex-col gap-y-1">
                    <p>Phone Number</p>
                    <input type="number" className="border-1 border-slate-400 rounded-sm focus:border-black focus:ring-0 h-10"/>
                    <p>Meal</p>
                    <select className="border-1 border-slate-400 rounded-sm focus:border-black focus:ring-0 h-10">
                        <option>Lunch</option>
                        <option>Dinner</option>
                    </select>
                    <p>Are you a Host ?</p>
                    <select className="border-1 border-slate-400 rounded-sm focus:border-black focus:ring-0 h-10">
                        <option>Yes</option>
                        <option>No</option>
                    </select>
                </div>
            </form>
            <p className="text-lg">
                Do you want to edit or cancel your reservation ?
                <span className="text-teal-700 underline underline-offset-2"><button  onClick={editPart}> Yes !</button></span>
            </p>
            {edit && <form className="flex flex-col gap-y-3 text-lg">
                        <p>Enter your tracking code </p>
                        <input type="number" className="border-1 border-slate-400 rounded-sm focus:border-black focus:ring-0 h-10 w-1/2"/>
                        <input type="submit" value="Search" className="bg-teal-300 hover:bg-teal-400 px-4 py-1 font-medium rounded-md shadow-sm self-start"/>
                    </form>}
            
            
        </div>
        
    );
}
export default Reservation;