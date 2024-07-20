import { FC, ReactNode, useState } from "react";
import { BottomNavigation, BottomNavigationAction } from "@mui/material";

import FavoriteIcon from "@mui/icons-material/Favorite";
import BookIcon from "@mui/icons-material/Book";
import LibraryBooksIcon from "@mui/icons-material/LibraryBooks";

import { Link } from "react-router-dom";

interface BaseProps {
  children?: ReactNode;
}

const Base: FC<BaseProps> = ({ children }) => {
  const [value, setValue] = useState(0);

  return (
    <div>
      {children}
      <BottomNavigation
        showLabels
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
        sx={{ width: "100%", position: "fixed", bottom: 0 }}
      >
        <BottomNavigationAction
          component={Link}
          to="/"
          label="Google Books"
          icon={<BookIcon />}
        />
        <BottomNavigationAction
          component={Link}
          to="/bookstore"
          label="Open Library"
          icon={<LibraryBooksIcon />}
        />
        <BottomNavigationAction
          component={Link}
          to="/favorites"
          label="Favorites"
          icon={<FavoriteIcon />}
        />
      </BottomNavigation>
    </div>
  );
};

export default Base;
