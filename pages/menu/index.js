import Base from "../../components/base";
import Button from "../../components/button";
import MenuItem from "../../components/menuItem";

const MenuPage=({foods})=>{
    return(
        <Base>
        <div className="grid grid-cols-2 gap-x-5 border-2 p-5 mx-auto my-20 w-2/3 border-solid border-black ">
            {foods.map(food => (<MenuItem id={food.id} title={food.title} ingredients={food.ingredients} price={food.price}/>))}
        </div>
        <div className="flex flex-row justify-center gap-x-5">
            <Button content='Book a Table' href='/reservation'/>
            <Button content='Order Now' href='/order'/>
        </div>
        </Base>
    );
}
export default MenuPage;


export async function getServerSideProps(context) {
    return {
      props: {
              foods: [
                  { id: 1, title: 'Beef Stroganoff' , ingredients: 'Veal fillet with mushroom sauce and vegtables' , price: '68 $'},
                  { id: 2, title: 'Cheese Burger ' , ingredients: 'Lamb,lettuce,tomato,pickled cucumber,onion,bread,cheese' , price: '150 $'},
                  { id: 3, title: 'Chicken Stroganoff' , ingredients: 'chicken with mushroom sauce and vegtables' , price: '90 $'},
                  { id: 4, title: 'Steak' , ingredients: 'Veal fillet with mushroom sauce and vegtables ' , price: '160 $'},
                  { id: 5, title: 'Pasta Alfredo' , ingredients:'Pasta with cream sauce' , price: '60 $'},
                  { id: 6, title: 'Pasta Napolitan' , ingredients:'Pasta with tomato sauce and chicken fiilet' , price: '70 $'},
                  { id: 7, title: 'Lasagna' , ingredients:'Lasagna with tomato sauce,minced meat and cheeses' , price: '111 $'},
                  { id: 8, title: 'Chelo Kabab Soltani' , ingredients:'lamb kebab with persian rice and chicken kebab' , price: '140 $'},
                  { id: 9, title: 'Chelo Kabab Barg' , ingredients:'lamb kebab with persian rice and tomato kebab with salad' , price: '130 $'},
                  { id: 10, title: 'Chelo Chicken Kebab' , ingredients:'Chicken kebab with persian rice and tomato kebab' , price: '111 $'},
                  { id: 11, title: 'Barberry Rice with Chicken' , ingredients:'Barberry Rice with Chicken and tomato sauce' , price: '70 $'},
                  { id: 12, title: 'Tahchin' , ingredients:'Rice with chicken and yogourt ' , price: '111 $'},
              ],
          },
    }
  }