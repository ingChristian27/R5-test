import getStyles from "./styles";
import InfoIcon from "@mui/icons-material/Info";
import {
  Card,
  CardMedia,
  Typography,
  Box,
  CardContent,
  Button,
} from "@mui/material/";
import { Book as BookType } from "models";

export interface BookProps {
  book: BookType;
  handleButton?: Function;
}

const Book = ({ book, handleButton }: BookProps) => {
  const styles = getStyles(!!handleButton);

  return (
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
        <CardContent sx={styles.cardContend}>
          <Typography
            variant="body2"
            color="text.secondary"
            sx={styles.bookTitle}
          >
            {book.volumeInfo.title}
          </Typography>
        </CardContent>
        {handleButton && (
          <Box sx={{ textAlign: "center" }}>
            <Button
              variant="outlined"
              size="small"
              endIcon={<InfoIcon />}
              onClick={() => handleButton(book)}
            >
              Ver más
            </Button>
          </Box>
        )}
      </Card>
    </Box>
  );
};

export default Book;
