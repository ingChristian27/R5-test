import constants from "helpers/constants/constants";

export const setItem = <T>(key: string, value: T) => {
  const path = `${constants.LocalStoragePrefix}${key}`;
  localStorage.setItem(path, JSON.stringify(value));
};

export default setItem;
