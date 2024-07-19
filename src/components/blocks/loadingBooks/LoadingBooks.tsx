import styles from "./styles";
import { Card, Box, CardContent, Skeleton } from "@mui/material/";
import { Grid } from "@mui/material";

const LoadingBooks = () => {
  return (
    <Grid container spacing={2}>
      {[...Array(10)].map((_, index) => (
        <Grid item xs={12} sm={6} md={4} lg={2.4} xl={2.4} key={index}>
          <Box>
            <Card>
              <Box>
                <Skeleton variant="rectangular" height={270} />
              </Box>
              <CardContent>
                <Skeleton variant="text" sx={styles.skeletonTitle} />
              </CardContent>
            </Card>
          </Box>
        </Grid>
      ))}
    </Grid>
  );
};

export default LoadingBooks;
