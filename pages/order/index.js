import Base from "../../components/base";
import Card from "../../components/card";
import Link from "next/link";
import { AiOutlineShoppingCart } from "react-icons/ai";
import Button from "../../components/button";

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
                {foods.map(food => (<Card key={food.id} title={food.title} ingredients={food.ingredients} price={food.price}/>))}
            </div>
            
            
        </Base>
    );
}
export default OrderPage;

export async function getServerSideProps(context) {
    return {
      props: {
              foods: [
                  { id: 1, title: 'Beef Stroganoff' , ingredients: 'Veal fillet with mushroom sauce and vegtables' , price:68},
                  { id: 2, title: 'Cheese Burger ' , ingredients: 'Lamb,lettuce,tomato,pickled cucumber,onion,bread,cheese' , price:150 },
                  { id: 3, title: 'Chicken Stroganoff' , ingredients: 'chicken with mushroom sauce and vegtables' , price:90},
                  { id: 4, title: 'Steak' , ingredients: 'Veal fillet with mushroom sauce and vegtables ' , price:160},
                  { id: 5, title: 'Pasta Alfredo' , ingredients:'Pasta with cream sauce' , price:60},
                  { id: 6, title: 'Pasta Napolitan' , ingredients:'Pasta with tomato sauce and chicken fiilet' , price:70},
                  { id: 7, title: 'Lasagna' , ingredients:'Lasagna with tomato sauce,minced meat and cheeses' , price:111},
                  { id: 8, title: 'Chelo Kabab Soltani' , ingredients:'lamb kebab with persian rice and chicken kebab' , price:140},
                  { id: 9, title: 'Chelo Kabab Barg' , ingredients:'lamb kebab with persian rice and tomato kebab with salad' , price:130},
                  { id: 10, title: 'Chelo Chicken Kebab' , ingredients:'Chicken kebab with persian rice and tomato kebab' , price:111},
                  { id: 11, title: 'Barberry Rice with Chicken' , ingredients:'Barberry Rice with Chicken and tomato sauce' , price:70},
                  { id: 12, title: 'Tahchin' , ingredients:'Rice with chicken and yogourt ' , price: 111},
              ],
          },
    }
  }