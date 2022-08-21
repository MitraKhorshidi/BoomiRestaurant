import { IoMdArrowDropdown, IoMdArrowDropup } from "react-icons/io";
const foodCard = ({ food, num, onAdd, onMinus }) => {
  function onAddClick() {
    onAdd(food.id);
  }
  const onMinusClick = () => {
    onMinus(food.id);
  };

  return (
    <div className="flex flex-row items-center gap-x-3 w-440 h-60 shadow-md rounded-md p-3">
      <img
        src={"/images/foods/" + food.id + ".jpg"}
        className="h-48 rounded-md"
      />
      <div className="flex flex-col justify-evenly gap-y-3">
        <h4 className="text-2xl font-medium text-title">{food.title}</h4>
        <p className="text-slate-800 text-base">{food.ingredients}</p>
        <p className="text-lg text-tilte">{food.price} $</p>
        <div className="flex flex-row items-center gap-x-2">
          {num == 0 && (
            <button
              onClick={onAddClick}
              className="text-base text-white bg-title active:bg-gray-900 px-3 py-1.5 rounded-sm"
            >
              add to cart
            </button>
          )}
          <p>{num}</p>
          {num > 0 &&
            (
              <div className="flex flex-col bg-title text-lg text-white rounded-sm">
                <button onClick={onAddClick}>
                  <IoMdArrowDropup />
                </button>
                <button onClick={onMinusClick}>
                  <IoMdArrowDropdown />
                </button>
              </div>
            )}
        </div>
      </div>
    </div>
  );
};
export default foodCard;
