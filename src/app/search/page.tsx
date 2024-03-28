import Link from "next/link";

import SearchBox from "~/components/search/SearchBox";
import SearchChefResults from "~/components/search/SearchChefResults";
import SearchRecipeResults from "~/components/search/SearchRecipeResults";
import SearchTab from "~/components/search/SearchTab";
import { type ChefResponse, type RecipeResponse } from "~/components/types/results";

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

  let MICROCMS_API_KEY: string;
  if (typeof process.env.MICROCMS_API_KEY === "string") {
    MICROCMS_API_KEY = process.env.MICROCMS_API_KEY;
  } else {
    throw new Error("NEXT_PUBLIC_TMDBURL is not defined");
  }

  const chefs = (await fetch(
    `https://${process.env.MICROCMS_SERVICE_DOMAIN}.microcms.io/api/v1/chef?limit=3&q=${encodeURIComponent(
      searchParams.q
    )}`,
    {
      headers: {
        "X-MICROCMS-API-KEY": MICROCMS_API_KEY,
      },
      next: { revalidate: 60 },
    }
  ).then((res) => res.json())) as ChefResponse;

  const recipes = (await fetch(
    `https://${process.env.MICROCMS_SERVICE_DOMAIN}.microcms.io/api/v1/recipe?limit=5&q=${encodeURIComponent(
      searchParams.q
    )}`,
    {
      headers: {
        "X-MICROCMS-API-KEY": MICROCMS_API_KEY,
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
