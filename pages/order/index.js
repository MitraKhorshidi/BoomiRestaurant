import Base from "../../components/base";
import Card from "../../components/card";
import Link from "next/link";
import { AiOutlineShoppingCart } from "react-icons/ai";
import Button from "../../components/button";
import { FoodRepository } from "../../data/database";

const OrderPage =({foods})=>{
    return(
        <Base>
            <div className="flex flex-row justify-center gap-x-5 mt-10">
                <Button href='/reservation' content='Book'/>
                <div className="bg-pink-100 hover:bg-pink-200 py-1.5 px-2.5 text-xl font-medium text-center rounded-md shadow-md">
                    <Link href='/order/cart'><span className="flex flex-row gap-x-1 items-center"><AiOutlineShoppingCart/>Cart</span></Link>
                </div>
            </div>
            <div className="flex flex-row flex-wrap justify-center gap-10 mt-8">
                {foods.map(food => (<Card key={food.id} id={food.id} title={food.title} ingredients={food.ingredients} price={food.price}/>))}
            </div>
            
            
        </Base>
    );
}
export default OrderPage;

export async function getServerSideProps(context) {
    const foods = await FoodRepository.list();
    return {props: {foods: foods.map((it)=>({...it}))}}
  }