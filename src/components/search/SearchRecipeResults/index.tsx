import Image from "next/image";
import Link from "next/link";

import { type RecipeResponse } from "~/types/results";

type Props = {
  recipes?: RecipeResponse;
};

export default function SearchChefResults({ recipes }: Props) {
  if (!recipes) {
    return null;
  }
  if (recipes.contents.length === 0) {
    return <p className="p-4 text-sm text-slate-900">レシピの検索結果がありません。</p>;
  }
  return (
    <div className="grid grid-cols-1 gap-x-3 gap-y-4 px-4 pb-12 pt-5 min-[375px]:grid-cols-2 min-[415px]:grid-cols-3">
      {recipes.contents.map((recipe) => (
        <div key={recipe.id} className="relative w-full">
          <Link
            href={{
              // pathname: `/recipes/${recipe.id}`,
              pathname: `/`,
            }}
            className="block"
          >
            <img
              src={`${recipe.thumbnail?.url}?fit=crop&w=174&h=174`}
              alt=""
              className="aspect-square h-auto w-full rounded-2xl border-2 border-solid border-gray-300"
              width={recipe.thumbnail?.width}
              height={recipe.thumbnail?.height}
            />
            <span className="line-clamp-2 pt-2 text-xs font-bold">{recipe.title}</span>
            <span className="line-clamp-1 pt-1 text-[10px] text-[#6F6E77]">{recipe.description}</span>
          </Link>
          <p className="absolute right-2 top-2 box-border flex items-center gap-1 rounded-2xl bg-black/60 px-2 py-[2px] leading-4 text-white">
            <Image src="/tablericons/heart.svg" width={18} height={18} alt="" />
            <span className="text-sm">1,234</span>
          </p>
        </div>
      ))}
    </div>
  );
}
