export default function CartItem({food , num , price}){
    return(
        <div className="flex flex-row justify-center items-center gap-x-3 rounded-md shadow-md p-5">
            <img src={"/images/foods/"+food.id+".jpg"} className="h-20 rounded-md shadow-sm"/>
            <div className="flex flex-col gap-y-1">
                <p className="font-medium">{food.title}</p>
                <p>amount : {num}</p>
                <p>totall price: {price} $</p>
            </div>
        </div>
    );
}