import Link from "next/link";
function NavBar(){

    const list=[
        {id: "home" , name: "Home" , href: "/"},
        {id: "reservation" , name: "Reservation" , href: "/reservation"},
        {id: "menu" , name: "Menu" , href: "/menu"},
        {id: "order" , name: "Order" , href: "/order"},
        {id: "about" , name: "About" , href: "/about"},
        
    ]

    return(
        <div>
            <ul>
                {list.map((page)=>(
                    <li key={page.id}>
                        <Link href={page.href}>{page.name}</Link>
                    </li>
                ))}
            </ul>
        </div>
    );
}
export default NavBar;