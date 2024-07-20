import constants from "helpers/constants/constants";

export const getItem = <T>(key: string): T | null => {
  const path = `${constants.LocalStoragePrefix}${key}`;
  const item = localStorage.getItem(path);
  return item ? JSON.parse(item) : null;
};

export default getItem;
