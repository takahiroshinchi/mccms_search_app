// タグの型定義
export type Tag = {
  id: string;
  name: string;
};

// シェフの型定義
export type Chef = {
  id: string;
  name: string;
  profile: string;
  image?: {
    url: string;
    width: number;
    height: number;
  };
};

export type ChefResponse = {
  contents: Chef[];
};

// レシピの型定義
export type Recipe = {
  id: string;
  title: string;
  description: string;
  content: string;
  thumbnail?: {
    url: string;
    width: number;
    height: number;
  };
  tags?: Tag[];
  chef?: Chef;
};

export type RecipeResponse = {
  contents: Recipe[];
};
