import Link from "next/link";
function NavBar(){

    const list=[
        {id: "home" , name: "خانه" , href: "/"},
        {id: "reservation" , name: "رزرو میز" , href: "/reservation"},
        {id: "menu" , name: "منو" , href: "/menu"},
        {id: "order" , name: "سفارش" , href: "/order"},
        {id: "about" , name: "درباره ما" , href: "/about"},
        
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