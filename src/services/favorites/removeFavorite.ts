import { Favorite } from "models";
import { setItem } from "services/localstorage";
import constants from "helpers/constants/constants";
import { getFavorites } from "services/favorites";

export const removeFavorite = (bookId: string) => {
  let favorites = getFavorites();
  favorites = favorites.filter(
    (favorite: Favorite) => favorite.book.id !== bookId
  );
  setItem(constants.keyStorageFavorites, favorites);
};

export default removeFavorite;
