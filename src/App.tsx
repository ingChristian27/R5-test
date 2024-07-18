import React from "react";
import SearchInput from "./components/SearchInput";
import { BookType } from "./components/Book";
import Books from "./components/Books";
import { Box } from "@mui/material";

interface Response {
  data?: {
    items: BookType[];
  };
}

const App = () => {
  const [response, setResponse] = React.useState<Response>({});
  return (
    <Box>
      <SearchInput setResponse={setResponse} />
      {response.data && <Books books={response.data.items} />}
    </Box>
  );
};

export default App;
