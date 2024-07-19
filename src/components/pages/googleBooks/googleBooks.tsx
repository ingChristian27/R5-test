import { useState } from "react";

import { Book as BookType } from "models";

import { SearchInput } from "components/blocks";
import { Books } from "components/blocks/";

import { Box } from "@mui/material";

const GoogleBooks = () => {
  const [books, setBooks] = useState<BookType[]>([]);
  return (
    <Box>
      <SearchInput setResponse={setBooks} />
      <Books books={books} />
    </Box>
  );
};

export default GoogleBooks;
