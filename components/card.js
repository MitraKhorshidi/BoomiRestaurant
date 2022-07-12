import { useState } from "react";
import { IoMdArrowDropdown , IoMdArrowDropup } from "react-icons/io";
import food4 from "../assets/images/food4.jpg";
const Card =({key , title , ingredients , price , img})=>{


    const [num , setNum] =useState(1);
    const [tprice , setPrice] =useState(price);
    const add =()=> {
        setNum(num+1);
        setPrice(tprice+price);
    }
    const minus =()=> {
        if(num>1) { 
            setNum(num-1);
            setPrice(tprice-price);
        }
    }

    


    return(
        <div className="flex flex-row gap-x-3 w-440 h-60 shadow-md rounded-md p-3">
            <img src={food4.src} className='h-52 rounded-md'/>
            <div className="flex flex-col justify-evenly">
                <h4 className="text-2xl font-medium text-title">{title}</h4>
                <p className="text-slate-800 text-base">{ingredients}</p>
                <p className="text-lg text-tilte">{tprice} $</p>
                <div className="flex flex-row items-center gap-x-2">
                    <button className="text-base text-white bg-title px-3 py-1.5 rounded-sm">add to cart</button>
                    <p>{num}</p>
                    <div className="flex flex-col bg-title text-lg text-white rounded-sm">
                        <button onClick={add} ><IoMdArrowDropup/></button>
                        <button onClick={minus} ><IoMdArrowDropdown/></button>
                    </div>
                    
                </div>
            </div>
            
        </div>
    );
}
export default Card;