import { Favorite as FavoriteModel } from "models";
import { Favorite } from "components/elements";
import { List, Divider, ListItem } from "@mui/material";

export interface BooksProps {
  favorites: FavoriteModel[];
  handleButton: Function;
}

const Favorites = ({ favorites, handleButton }: BooksProps) => {
  return (
    <List sx={{ width: "100%", bgcolor: "background.paper" }}>
      {favorites.map((favorite) => (
        <ListItem key={favorite.book.id}>
          <Favorite favorite={favorite} handleButton={handleButton} />
          <Divider />
        </ListItem>
      ))}
    </List>
  );
};

export default Favorites;
