import styles from "./styles";
import { Book as BookType } from "models";
import { Card, CardMedia, Typography, Box, CardContent } from "@mui/material/";

export interface BookProps {
  book: BookType;
  handleButton?: Function;
}

const BookDetail = ({ book }: BookProps) => {
  return (
    <Card sx={styles.card}>
      <Box p={2}>
        {book.volumeInfo.imageLinks ? (
          <CardMedia
            component="img"
            height="420"
            width="30%"
            image={book.volumeInfo.imageLinks.thumbnail}
            alt={book.volumeInfo.title}
          />
        ) : (
          <CardMedia
            component="img"
            height="420"
            width="30%"
            image="https://picsum.photos/200/260"
            alt="default"
          />
        )}
      </Box>
      <Box sx={{ display: "flex", width: "60%" }}>
        <CardContent sx={styles.cardContainer}>
          <Typography component="div" variant="h5">
            {book.volumeInfo.title}
          </Typography>
          <Typography
            variant="subtitle1"
            color="text.secondary"
            component="div"
            sx={styles.description}
          >
            {book?.volumeInfo?.description}
          </Typography>
        </CardContent>
      </Box>
    </Card>
  );
};

export default BookDetail;
