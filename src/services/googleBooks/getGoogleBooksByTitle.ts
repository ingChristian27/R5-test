import axios from "axios";
import constants from "helpers/constants/constants";

export const getGoogleBooksByTitle = async (title: string) => {
  const url = `${constants.googleApiBook}volumes?q=${title}`;
  const response = await axios.get(url);
  return response?.data?.items || [];
};

export default getGoogleBooksByTitle;
