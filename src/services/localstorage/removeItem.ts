import constants from "helpers/constants/constants";

export const removeItem = (key: string) => {
  const path = `${constants.LocalStoragePrefix}${key}`;
  localStorage.removeItem(path);
};

export default removeItem;
