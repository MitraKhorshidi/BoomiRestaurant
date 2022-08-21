import Link from "next/link";
const BottomNavbar = () => {
  const list = [
    { id: "reservation", name: "Reservation", href: "/reservation" },
    { id: "menu", name: "Menu", href: "/menu" },
    { id: "order", name: "Order", href: "/order" },
    { id: "about", name: "About", href: "/about" },
  ];

  return (
    <ul>
      {list.map((page) => (
        <li key={page.id} className="text-xl text-slate-200 hover:text-white">
          <Link href={page.href}>{page.name}</Link>
        </li>
      ))}
    </ul>
  );
};
export default BottomNavbar;
