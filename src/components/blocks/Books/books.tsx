import { Book as BookType } from "models";
import { Book } from "components/elements";
import { Grid } from "@mui/material";

export interface BooksProps {
  books: BookType[];
  handleButton?: Function;
}

const Books = ({ books, handleButton }: BooksProps) => {
  return (
    <Grid container spacing={2}>
      {books.map((book) => (
        <Grid item xs={12} sm={6} md={4} lg={2.4} xl={2.4} key={book.id}>
          <Book book={book} handleButton={handleButton} />
        </Grid>
      ))}
    </Grid>
  );
};

export default Books;
