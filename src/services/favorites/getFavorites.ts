import constants from "helpers/constants/constants";
import { Favorite } from "models";
import { getItem } from "services/localstorage";

export const getFavorites = (): Favorite[] => {
  return getItem<Favorite[]>(constants.keyStorageFavorites) || [];
};

export default getFavorites;
