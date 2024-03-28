import SearchBox from "@/search/SearchBox";
import SearchChefResults from "@/search/SearchChefResults";
import SearchRecipeResults from "@/search/SearchRecipeResults";
import SearchTab from "@/search/SearchTab";
import { type ChefResponse, type RecipeResponse } from "@/search/types/results";

type Props = {
  params: {
    slug: string;
  };
  searchParams: {
    q?: string;
  };
};

export default async function Page({ params, searchParams }: Props) {
  if (searchParams.q === undefined) {
    searchParams.q = "";
  }

  let MICROCMS_API_KEY: string;
  if (typeof process.env.MICROCMS_API_KEY === "string") {
    MICROCMS_API_KEY = process.env.MICROCMS_API_KEY;
  } else {
    throw new Error("NEXT_PUBLIC_TMDBURL is not defined");
  }

  const chefs = (await fetch(
    `https://${process.env.MICROCMS_SERVICE_DOMAIN}.microcms.io/api/v1/chef?q=${encodeURIComponent(searchParams.q)}`,
    {
      headers: {
        "X-MICROCMS-API-KEY": MICROCMS_API_KEY,
      },
      next: { revalidate: 60 },
    }
  ).then((res) => res.json())) as ChefResponse;

  const recipes = (await fetch(
    `https://${process.env.MICROCMS_SERVICE_DOMAIN}.microcms.io/api/v1/recipe?q=${encodeURIComponent(searchParams.q)}`,
    {
      headers: {
        "X-MICROCMS-API-KEY": MICROCMS_API_KEY,
      },
      next: { revalidate: 60 },
    }
  ).then((res) => res.json())) as RecipeResponse;

  return (
    <>
      <SearchBox type={params.slug} />
      <SearchTab type={params.slug} basePath="/search" q={searchParams.q} />

      {params.slug !== "recipe" && <SearchChefResults chefs={chefs} />}

      {params.slug !== "chef" && <SearchRecipeResults recipes={recipes} />}
    </>
  );
}
