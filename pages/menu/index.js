import Base from "/components/base";
import Button from "/components/button";
import MenuItem from "/components/menuItem";
import { FoodRepository } from "/data/repository";

export default function MenuPage({ foods }) {
  return (
    <Base>
      <h1 className="text-center text-4xl font-medium text-title mt-10">
        Boomi Menu
      </h1>
      <div className="grid grid-cols-2 gap-x-5 border-2 p-5 mx-auto my-7 w-2/3 border-solid border-black ">
        {foods.map((food) => (
          <MenuItem
            key={food.id}
            id={food.id}
            title={food.title}
            ingredients={food.ingredients}
            price={food.price}
          />
        ))}
      </div>
      <div className="flex flex-row justify-center gap-x-5">
        <Button content="Book a Table" href="/reservation" />
        <Button content="Order Now" href="/order" />
      </div>
    </Base>
  );
}

export async function getServerSideProps(context) {
  const foods = await FoodRepository.list();
  return { props: { foods: foods.map((it) => ({ ...it })) } };
}
