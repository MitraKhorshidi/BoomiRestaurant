import Base from "../../components/base";
import FoodCard from "../../components/foodCard";
import Link from "next/link";
import { AiOutlineShoppingCart } from "react-icons/ai";
import Button from "../../components/button";
import { FoodRepository } from "../../data/database";
import { useState } from "react";

const MODE_ORDER=0;
const MODE_CART=1;
const MODE_CHECKOUT=2;

const OrderPage =({foods})=>{

    const [mode,setMode]=useState(MODE_ORDER);

    const [shoppingCart , setShoppingCart]=useState({});

    function onAdd(id){
        console.log('onadd',id)
        const prevNum = shoppingCart[id] || 0 ;
        setShoppingCart({...shoppingCart , [id]:prevNum+1});
    }

    function onMinus(id){
        console.log('oninus',id)
        const prevNum = shoppingCart[id] || 0 ;
        if(prevNum>0)
            setShoppingCart({...shoppingCart , [id]:prevNum-1});
    }

    function onOrderReq(event){
        event.preventDefault();
        const userId=0;
        const address=0;
        shoppingCart;

        apiRegisterOrder(userId,address,shoppingCart);
    }
    

    return(
        <Base>
        {mode==MODE_ORDER && <>
            <div className="flex flex-row justify-center gap-x-5 mt-10">
                <Button href='/reservation' content='Book'/>
                <div className="bg-pink-100 hover:bg-pink-200 py-1.5 px-2.5 text-xl font-medium text-center rounded-md shadow-md">
                    <button onClick={()=>setMode(MODE_CART)} className="flex flex-row gap-x-1 items-center"><AiOutlineShoppingCart/>Cart</button>
                </div>
            </div>
            <div className="flex flex-row flex-wrap justify-center gap-10 mt-8">
                {foods.map(food => (
                    <FoodCard key={food.id} food={food} num={shoppingCart[food.id] || 0}
                        onAdd={onAdd} onMinus={onMinus}/>
                    ))}
            </div>
        </>}
        {mode==MODE_CART &&<>
            <div className="flex flex-col justify-center items-center gap-y-4 mt-6">
                <h4 className="text-2xl text-title font-medium">Cart</h4>
                {foods.filter( (food)=>shoppingCart[food.id]>0 ).map((food)=>(
                    <div key={food.id}>
                        <p>{food.title}</p>
                        <p>{shoppingCart[food.id]}</p>
                        <p>total price{food.price*shoppingCart[food.id]}</p>
                    </div>
                ))}
                <div className="flex flex-row  gap-x-4">
                    <button onClick={()=>setMode(MODE_ORDER)} className="text-gray-700 py-1.5 px-2.5 text-xl font-medium text-center rounded-md shadow-md">back to order</button>
                    <button onClick={()=>setMode(MODE_CHECKOUT)} className="bg-pink-200 hover:bg-pink-300 py-1.5 px-2.5 text-xl font-medium text-center rounded-md shadow-md">Checkout</button>
                </div>
                
            </div>
        </>}
        
        {mode==MODE_CHECKOUT &&<>
            <form onSubmit={onOrderReq}>
                <p>Enter your name</p>
                <p>Enter your phone number</p>
                <p>Enter your address</p>
                <input type="submit" value="register"/>
            </form>
        </>}
            
        </Base>
    );
}
export default OrderPage;


export async function getServerSideProps(context) {
    const foods = await FoodRepository.list();
    return {props: {foods: foods.map((it)=>({...it}))}}
  }