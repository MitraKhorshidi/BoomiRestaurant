import food4 from "../assets/images/food4.jpg";
const MenuItem = ({ id , title , ingredients , price }) =>{
    return(
        <div className="flex flex-row justify-between my-5">
            <div className="flex flex-row items-center gap-x-10 ">
                <img src={food4.src} className='h-32'/>
                <div className="flex flex-col gap-y-2">
                    <h4 className="text-2xl font-semibold text-title">{title}</h4>
                    <p className="text-base text-slate-800">{ingredients}</p>
                </div>
            </div>
            <p className="text-lg text-title self-center">{price}</p>
        </div>
        
    );
}
export default MenuItem;