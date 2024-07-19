import axios from "axios";
import constants from "helpers/constants/constants";

export const getOpenlibraryByTitle = async (title: string) => {
  const response = await axios.get(`${constants.openLibrary}?q=${title}`);
  return response;
};

export default getOpenlibraryByTitle;
