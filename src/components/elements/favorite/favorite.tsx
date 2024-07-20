import { Favorite as FavoriteModel } from "models";

import * as React from "react";

import {
  ListItem,
  ListItemText,
  ListItemAvatar,
  CardMedia,
  Typography,
  Divider,
  Box,
  Button,
} from "@mui/material";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";

export interface BooksProps {
  favorite: FavoriteModel;
  handleButton: Function;
}

const Favorite = ({ favorite, handleButton }: BooksProps) => {
  return (
    <ListItem alignItems="flex-start">
      <ListItemAvatar>
        <Box p={2} pt={0}>
          <CardMedia
            component="img"
            height="170"
            image={favorite.book.volumeInfo.imageLinks.thumbnail}
            alt={favorite.book.volumeInfo.title}
          />
        </Box>
      </ListItemAvatar>
      <ListItemText
        primary={favorite.book.volumeInfo.title}
        secondary={
          <React.Fragment>
            <Typography
              sx={{ display: "inline" }}
              component="span"
              variant="body2"
              color="text.primary"
            >
              {favorite.book.volumeInfo.description}
            </Typography>
            <Divider />
            <Typography
              sx={{ display: "inline" }}
              component="span"
              variant="body2"
              color="text.primary"
            >
              {favorite.comment}
            </Typography>
            <Box pt={4} sx={{ textAlign: "center" }}>
              <Button
                variant="outlined"
                size="small"
                endIcon={<FavoriteBorderIcon />}
                onClick={() => handleButton(favorite.book.id)}
              >
                Ya no me gusta
              </Button>
            </Box>
          </React.Fragment>
        }
      />
    </ListItem>
  );
};

export default Favorite;
