import Link from "next/link";

const Button =( {content , href , onclick} ) => {
    return (
        <button className="bg-teal-300 text-2xl font-medium rounded-md shadow-sm px-4 py-2 hover:bg-teal-400" onClick={onclick}>
            <Link href={href}>{content}</Link>
        </button>
    ) ;
}
export default Button;