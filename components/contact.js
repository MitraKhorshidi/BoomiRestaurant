const Contact = () =>{
    return(
        <form className="flex flex-col gap-y-1">
                    <input type="text" placeholder="Write your message and Contact with us." className="bg-white  w-96 h-20  text-sm text-black" />
                    <input type="submit" value="Send" className="cursor-pointer"/>
        </form>
    );
}
export default Contact;