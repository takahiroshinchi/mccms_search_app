import Link from "next/link";

import SearchBox from "@/search/SearchBox";
import SearchChefResults from "@/search/SearchChefResults";
import SearchRecipeResults from "@/search/SearchRecipeResults";
import SearchTab from "@/search/SearchTab";
import { type ChefResponse, type RecipeResponse } from "@/search/types/results";

const Title = ({ text, type, q }: { text: string; type: string; q: string }) => {
  return (
    <div className="flex items-center justify-between px-4">
      <p className="text-xl font-bold">{text}</p>
      <p className="text-base text-[#908E96]">
        <Link
          href={{
            pathname: `/search/${encodeURIComponent(type)}`,
            query: { q },
          }}
        >
          もっとみる
        </Link>
      </p>
    </div>
  );
};

type Props = {
  params: {
    type: string;
  };
  searchParams: {
    q?: string;
  };
};

export default async function Page({ params, searchParams }: Props) {
  if (searchParams.q === undefined) {
    searchParams.q = "";
  }

  if (params.type === undefined) {
    params.type = "all";
  }

  const chefs = (await fetch(
    `https://29xu9p1l3f.microcms.io/api/v1/chef?limit=3&q=${encodeURIComponent(searchParams.q)}`,
    {
      headers: {
        "X-MICROCMS-API-KEY": "TsyPrNWEO382U41DYsQrZFL2TlIDE2wuNK4v",
      },
      next: { revalidate: 60 },
    }
  ).then((res) => res.json())) as ChefResponse;

  const recipes = (await fetch(
    `https://29xu9p1l3f.microcms.io/api/v1/recipe?limit=5&q=${encodeURIComponent(searchParams.q)}`,
    {
      headers: {
        "X-MICROCMS-API-KEY": "TsyPrNWEO382U41DYsQrZFL2TlIDE2wuNK4v",
      },
      next: { revalidate: 60 },
    }
  ).then((res) => res.json())) as RecipeResponse;

  return (
    <>
      <SearchBox type={params.type} />
      <SearchTab type={params.type} basePath="/search" q={searchParams.q} />

      <Title text="シェフ" type="chef" q={searchParams.q} />
      <SearchChefResults chefs={chefs} />

      <Title text="レシピ" type="recipe" q={searchParams.q} />
      <SearchRecipeResults recipes={recipes} />
    </>
  );
}
