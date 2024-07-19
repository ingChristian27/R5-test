import { useState, useEffect } from "react";
import styles from "helpers/styles/styles";

import { Book as BookType } from "models";

import { SearchInput, LoadingBooks } from "components/blocks";
import { Books } from "components/blocks/";

import { getOpenlibraryByTitle } from "services";
import { transformBookDataFromOpenLibrary } from "helpers/functions";

import { Grid, Container, Typography, Box, Alert } from "@mui/material";

const DEFAULT_TITLE = "javascript";

const Bookstore = () => {
  const [books, setBooks] = useState<BookType[]>([]);
  const [searchValue, setSearchValue] = useState<string>(DEFAULT_TITLE);
  const [showError, setShowError] = useState({ isError: false, message: "" });
  const [showSpinner, setShowSpinner] = useState(false);

  const getBooks = async (title: string) => {
    try {
      setShowSpinner(true);
      const response = await getOpenlibraryByTitle(title);
      const books = transformBookDataFromOpenLibrary(response.data);
      setBooks(books);
      setShowSpinner(false);
    } catch (error) {
      console.error(error);
      setShowSpinner(false);
      setShowError({
        isError: true,
        message:
          "An unexpected error occurred while searching for books. Please try again.",
      });
    }
  };

  const handleSetInputSearch = (value: string) => setSearchValue(value);

  useEffect(() => {
    getBooks(searchValue);
  }, [searchValue]);

  return (
    <Container fixed sx={styles.containerBase}>
      {showError.isError ?? <Alert severity="error">{showError.message}</Alert>}

      <Grid container spacing={2}>
        <Grid item xs={12} sm={6}>
          <Typography variant="h5" component="h1">
            OPEN LIBRARY
          </Typography>
        </Grid>
        <Grid item xs={12} sm={6}>
          <SearchInput
            setInputSearch={handleSetInputSearch}
            defaultValue={searchValue}
          />
        </Grid>
      </Grid>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Box pt={10}>
            {showSpinner ? <LoadingBooks /> : <Books books={books} />}
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Bookstore;
