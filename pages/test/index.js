import { useState } from "react";

export default function(){

    const [res,setRes]=useState('');

    async function add(){
        const res = await fetch('/api/newReservation'  , {
            method: 'POST' ,
            body:JSON.stringify({userId:10, num:5, TableId:4})
        });
        
        if(res.status==200){
            const data =await res.json();
            setRes(JSON.stringify(data));
        }
        else{
            const error=await res.text();
            setRes(error);
        }
        
    }

    return(
        <div>
            <p>res:{res}</p>
            <button onClick={add}>add reservation</button>
        </div>
    );
}