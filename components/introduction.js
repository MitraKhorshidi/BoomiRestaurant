import pic1 from "/assets/images/pic1.jpg";
import pic3 from "/assets/images/pic3.jpg";
import food1 from "/assets/images/food1.jpg";
import food2 from "/assets/images/food2.jpg";
import food3 from "/assets/images/food3.jpg";
import food4 from "/assets/images/food4.jpg";
import food5 from "/assets/images/food5.jpg";
import food6 from "/assets/images/food6.jpg";
import Button from "./button";

const Introduction = () => {
  return (
    <div className="flex flex-col mx-auto ">
      <div className="mx-auto flex flex-col text-center justify-end gap-5 z-0 bg-pink-100 w-440 h-600 shadow-sm cursor-pointer">
        <h1 className="text-4xl font-bold ">
          <span className="text-title">Boomi</span> Restaurant
        </h1>
        <p className="text-lg font-medium mb-20">
          Host your delicious moments.
        </p>
      </div>

      <div className="flex flex-row mx-auto gap-0 -mt-560 z-10 shadow-lg">
        <div className="flex-flex-col">
          <img src={food1.src} className="h-169 rounded-tl-md" />
          <img src={food2.src} className="w-287 h-169  rounded-bl-md" />
        </div>

        <img src={pic1.src} className="w-540 h-338 " />
        <div className="flex flex-col">
          <div className="flex flex-row">
            <img src={food3.src} className=" h-169" />
            <img src={food4.src} className=" h-169 rounded-tr-md" />
          </div>
          <img src={food5.src} className=" h-169 rounded-br-md" />
        </div>
      </div>

      <div className="flex flex-row justify-center gap-x-72  mt-48 z-20">
        <Button content="Book" href="/reservation" />
        <Button content="Order" href="/order" />
      </div>

      <div className="flex flex-row justify-center mx-auto gap-x-695 -mt-20 ">
        <div className="flex flex-col bg-pink-100 h-60 w-52 rounded-sm shadow-sm">
          <img
            src={food6.src}
            className="w-44 -mt-5 rounded-sm shadow-sm mx-auto"
          />
        </div>
        <div className="flex flex-col bg-pink-100 h-60 w-52 rounded-sm shadow-sm">
          <img
            src={pic3.src}
            className="w-44 -mt-5 rounded-sm shadow-sm mx-auto"
          />
        </div>
      </div>
    </div>
  );
};
export default Introduction;
