import { useRef, useState } from "react";
import { AiOutlineShoppingCart } from "react-icons/ai";
import Base from "/components/base";
import FoodCard from "/components/foodCard";
import Button from "/components/button";
import CartItem from "/components/cartItem";
import { FoodRepository } from "/data/repository";
import { apiRegisterOrder } from "/data/apiClient";
import delivery from "/assets/images/delivery.svg";
import { dateStr } from "/data/utility";

const MODE_ORDER = 0;
const MODE_CART = 1;
const MODE_CHECKOUT = 2;

const OrderPage = ({ foods }) => {
  const [mode, setMode] = useState(MODE_ORDER);

  const [shoppingCart, setShoppingCart] = useState({});

  function onAdd(id) {
    console.log("onadd", id);
    const prevNum = shoppingCart[id] || 0;
    setShoppingCart({ ...shoppingCart, [id]: prevNum + 1 });
  }

  function onMinus(id) {
    console.log("oninus", id);
    const prevNum = shoppingCart[id] || 0;
    if (prevNum > 0) {
      setShoppingCart({ ...shoppingCart, [id]: prevNum - 1 });
    }
  }

  const userIdRef = useRef();
  const addressRef = useRef();

  const [res, setRes] = useState(undefined);
  async function onOrderReq(event) {
    event.preventDefault();

    const userId = userIdRef.current.value;
    const address = addressRef.current.value;
    if(confirm("Do you want to register this order ?"))
    try {
      const res = await apiRegisterOrder(userId, address, shoppingCart);
      setRes(res);
    } catch (err) {
      setRes({ error: err.message });
    }
  }


  if(!res || res.error)return (
    <Base>
      {mode == MODE_ORDER && (
        <>
          <div className="flex flex-row justify-center gap-x-5 mt-10">
            <Button href="/reservation" content="Book" />
            <div className="bg-pink-100 hover:bg-pink-200 py-1.5 px-2.5 text-xl font-medium text-center rounded-md shadow-md">
              <button
                onClick={() => setMode(MODE_CART)}
                className="flex flex-row gap-x-1 items-center"
              >
                <AiOutlineShoppingCart />Cart
              </button>
            </div>
          </div>
          <div className="flex flex-row flex-wrap justify-center gap-10 mt-8">
            {foods.map((food) => (
              <FoodCard
                key={food.id}
                food={food}
                num={shoppingCart[food.id] || 0}
                onAdd={onAdd}
                onMinus={onMinus}
              />
            ))}
          </div>
        </>
      )}
      {mode == MODE_CART && (
        <>
          <div className="flex flex-col justify-center items-center gap-y-5 mt-10">
            <h4 className="text-2xl text-title font-medium">Cart</h4>
            <div className="flex flex-row flex-wrap justify-center gap-x-8">
              {foods.filter((food) => shoppingCart[food.id] > 0).map((food) => (
                <CartItem
                  key={food.id}
                  food={food}
                  num={shoppingCart[food.id]}
                  price={food.price * shoppingCart[food.id]}
                />
              ))}
            </div>

            <div className="flex flex-row  gap-x-4 mt-4">
              <button
                onClick={() => setMode(MODE_ORDER)}
                className="text-gray-700 py-1.5 px-2.5 text-lg font-medium text-center rounded-md shadow-md"
              >
                back to order
              </button>
              <button
                onClick={() => setMode(MODE_CHECKOUT)}
                className="bg-pink-200 hover:bg-pink-300 py-1.5 px-2.5 text-lg font-medium text-center rounded-md shadow-md"
              >
                Checkout
              </button>
            </div>
          </div>
        </>
      )}

      {mode == MODE_CHECKOUT && (
        <>
          <form
            onSubmit={onOrderReq}
            className="flex flex-col justify-center items-center gap-y-5 mt-10"
          >
            <p className="text-2xl text-title font-medium">
              Resgistering Order
            </p>
            <div className="flex flex-row gap-x-5">
              <div className="flex flex-col gap-y-2">
                <p>phone number :</p>
                <input
                  ref={userIdRef}
                  type="tel"
                  className="border-1 border-slate-400 rounded-sm focus:border-black focus:ring-0 h-10"
                />
              </div>
              <div className="flex flex-col gap-y-2">
                <p>address :</p>
                <input
                  ref={addressRef}
                  type="text"
                  className="border-1 border-slate-400 rounded-sm focus:border-black focus:ring-0 h-10"
                />
              </div>
            </div>
            <div className="flex flex-row gap-x-5">
              <button
                onClick={() => setMode(MODE_CART)}
                className="text-gray-700 py-1.5 px-2.5 text-lg font-medium text-center rounded-md shadow-md"
              >
                back to cart
              </button>
              <input
                type="submit"
                value="Register"
                className="bg-pink-200 hover:bg-pink-300 text-lg px-4 py-1 font-medium rounded-md shadow-sm self-center"
              />
            </div>
          </form>
        </>
      )}
    </Base>
  );

  return(<>
    <Base>
      <div className="flex flex-row justify-center items-center gap-x-20 mt-10">
        <table className="table-fixed border-separate border  border-slate-400">
          <tr>
            <td className="border border-slate-300 p-2">Order Number</td>
            <td className="border border-slate-300 text-center">
              {res.id}
            </td>
          </tr>
          <tr>
            <td className="border border-slate-300 p-2">Phone Number</td>
            <td className="border border-slate-300 text-center">
              {res.userId}
            </td>
          </tr>
          <tr>
            <td className="border border-slate-300 p-2">Total Price</td>
            <td className="border border-slate-300 text-center">
              {res.price}
            </td>
          </tr>
          <tr>
            <td className="border border-slate-300 p-2">Address</td>
            <td className="border border-slate-300 text-center">
              {res.address}
            </td>
          </tr>
          <tr>
            <td className="border border-slate-300 p-2">Time</td>
            <td className="border border-slate-300 text-center">
              {dateStr(res.time)}
            </td>
          </tr>
        </table>
        <div className="flex flex-col items-center">
          <img src={delivery.src} className="w-32"/>
          <p>Your Order will deliverd in 30 minutes.</p>
          <p>Pay the total price to delivery man.</p>
        </div>
      </div>
      
    </Base>
  </>);
};
export default OrderPage;

export async function getServerSideProps(context) {
  const foods = await FoodRepository.list();
  return { props: { foods: foods.map((it) => ({ ...it })) } };
}
