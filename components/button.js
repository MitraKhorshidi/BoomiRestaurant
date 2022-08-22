import Link from "next/link";

const Button = ({ content, href, onclick }) => {
  return (
    <Link href={href}>
      <a>
        <button
          className="bg-teal-300 text-2xl font-medium rounded-md shadow-md px-4 py-2 hover:bg-teal-400"
          onClick={onclick}
        >
          {content}
        </button>
      </a>
    </Link>
  );
};
export default Button;
