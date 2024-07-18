import { useState } from "react";
import { SearchInput } from "../../blocks";
import { Book as BookType } from "../../../models";
import { Books } from "../../blocks/";
import { Box } from "@mui/material";

interface Response {
  data?: {
    items: BookType[];
  };
}

const GoogleBooks = () => {
  const [response, setResponse] = useState<Response>({});

  return (
    <Box>
      <SearchInput setResponse={setResponse} />
      {response.data && <Books books={response.data.items} />}
    </Box>
  );
};

export default GoogleBooks;
