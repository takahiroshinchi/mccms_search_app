import Image from "next/image";
import Link from "next/link";

import { type ChefResponse } from "@/search/types/results";

type Props = {
  chefs?: ChefResponse;
};

export default function SearchChefResults({ chefs }: Props) {
  if (!chefs) {
    return null;
  }
  if (chefs.contents.length === 0) {
    return <p className="p-4 text-sm text-slate-900">シェフの検索結果がありません。</p>;
  }
  return (
    <div className="px-4 pb-12 pt-5">
      {chefs.contents.map((chef) => (
        <div key={chef.id}>
          <Link
            href={{
              // pathname: `/chefs/${chef.id}`,
              pathname: `/`,
            }}
            className="flex gap-4 pb-5"
          >
            <img
              src={`${chef.image?.url}?fit=crop&w=88&h=116`}
              alt=""
              className="block aspect-[9/12] h-[116px] w-[88px] rounded-lg"
              width={chef.image?.width}
              height={chef.image?.height}
            />
            <div className="flex-1">
              <p className="text-base font-bold">{chef.name}</p>
              <p className="line-clamp-3 pt-1 text-sm text-[#86848D]">{chef.profile}</p>
              <p className="flex items-center gap-1 pt-1 text-sm">
                <Image src="/tablericons/tools-kitchen-2.svg" width={16} height={16} alt="" />
                <span>123レシピ</span>
              </p>
            </div>
          </Link>
        </div>
      ))}
    </div>
  );
}
