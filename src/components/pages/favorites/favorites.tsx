import { useState, useEffect } from "react";
import styles from "helpers/styles/styles";

import { Favorite as FavoriteModel } from "models";

import { Grid, Container, Typography, Box } from "@mui/material";

import { getFavorites, removeFavorite } from "services/favorites";

import { Favorites as FavoriteList } from "components/blocks";

const Favorites = () => {
  const [favorites, setFavorites] = useState<FavoriteModel[]>([]);

  const getFavoritesBooks = async () => {
    setFavorites(getFavorites());
  };

  useEffect(() => {
    getFavoritesBooks();
  }, []);

  const handleButton = (id: string) => {
    removeFavorite(id);
    getFavoritesBooks();
  };

  return (
    <Container fixed sx={styles.containerBase}>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={12}>
          <Typography variant="h5" component="h1">
            Favorites
          </Typography>
        </Grid>
      </Grid>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Box pt={10}>
            <FavoriteList favorites={favorites} handleButton={handleButton} />
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Favorites;
