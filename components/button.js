import Link from "next/link";

const Button =( {content , href} ) => {
    return (
        <div className="bg-teal-300 text-lg font-medium rounded-md shadow-sm px-4 py-2 hover:bg-teal-400">
            <Link href={href}>{content}</Link>
        </div>
    ) ;
}
export default Button;