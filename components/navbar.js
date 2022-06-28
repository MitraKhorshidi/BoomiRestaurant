import Link from "next/link";
const NavBar=()=>{

    const list=[
        {id: "reservation" , name: "Reservation" , href: "/reservation"},
        {id: "menu" , name: "Menu" , href: "/menu"},
        {id: "order" , name: "Order" , href: "/order"},
        {id: "about" , name: "About" , href: "/about"},
        
    ]

    return(
        <div className="flex flex-row justify-between mx-16 my-4">
            <div className="text-lg font-medium text-title hover:text-title"><Link href='/'>Boomi</Link> <span className="text-black hover:text-title"><Link href='/'>Restaurant</Link></span></div>
            <ul className="flex flex-row gap-x-4 ">
                {list.map((page)=>(
                    <li key={page.id} className="text-lg font-medium hover:text-title ">
                        <Link href={page.href}>{page.name}</Link>
                    </li>
                ))}
            </ul>
        </div>
    );
}
export default NavBar;