import styles from "./styles";
import { Card, CardMedia, Typography, Box, CardContent } from "@mui/material/";
import { Book as BookType } from "models";

export interface BookProps {
  book: BookType;
}

const Book = ({ book }: BookProps) => (
  <Box>
    <Card sx={styles.cardContainer}>
      <Box sx={styles.cardMediaContainer}>
        {book.volumeInfo.imageLinks ? (
          <CardMedia
            component="img"
            height="270"
            image={book.volumeInfo.imageLinks.thumbnail}
            alt={book.volumeInfo.title}
          />
        ) : (
          <CardMedia
            component="img"
            height="220"
            image="https://picsum.photos/200/260"
            alt="default"
          />
        )}
      </Box>
      <CardContent>
        <Typography
          variant="body2"
          color="text.secondary"
          sx={styles.bookTitle}
        >
          {book.volumeInfo.title}
        </Typography>
      </CardContent>
    </Card>
  </Box>
);

export default Book;
