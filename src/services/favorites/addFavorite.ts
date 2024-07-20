import { Favorite } from "models";
import { setItem } from "services/localstorage";
import constants from "helpers/constants/constants";
import { getFavorites, isFavorite } from "services/favorites";

export const addFavorite = (favorite: Favorite) => {
  const favorites = getFavorites();

  const isAlreadyFavorite = isFavorite(favorite.book.id, favorites);

  if (!isAlreadyFavorite) {
    favorites.push(favorite);
    setItem(constants.keyStorageFavorites, favorites);
  }
};

export default addFavorite;
