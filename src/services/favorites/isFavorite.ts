import { Favorite } from "models";

export const isFavorite = (key: string, favorites: Favorite[]) => {
  const isAlreadyFavorite = favorites.some((fav) => fav.book.id === key);

  return isAlreadyFavorite;
};

export default isFavorite;
