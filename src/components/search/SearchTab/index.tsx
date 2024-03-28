import Link from "next/link";

type Props = {
  type?: string;
  basePath?: string;
  q: string;
};

const searchTypes = [
  {
    id: "all",
    name: "すべて",
  },
  { id: "chef", name: "シェフ" },
  { id: "recipe", name: "レシピ" },
];

export default function SearchTab({ type = "all", basePath = "", q }: Props) {
  return (
    <ul className="flex items-center pb-5">
      {searchTypes.map((p) => (
        <li
          className={`flex-1 p-[10px] ${
            type === p.id
              ? "border-b-2 border-solid border-black font-bold"
              : "border-b-2 border-solid border-slate-300"
          }`}
          key={p.id}
        >
          <Link
            href={{
              pathname: p.id === "all" ? basePath : `${basePath}/${p.id}`,
              query: { q },
            }}
            className="flex items-center justify-center"
          >
            {p.name}
          </Link>
        </li>
      ))}
    </ul>
  );
}
