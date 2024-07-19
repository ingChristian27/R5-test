import styles from "helpers/styles/styles";
import InputBase from "@mui/material/InputBase";
import { Box, Button } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

import { useFormik } from "formik";

interface SearchInputProps {
  setInputSearch: (value: string) => void;
  defaultValue: string;
}

const SearchInput = ({ setInputSearch, defaultValue }: SearchInputProps) => {
  const formik = useFormik({
    enableReinitialize: true,
    initialValues: { searchInput: defaultValue },
    onSubmit: (values) => setInputSearch(values.searchInput),
  });

  return (
    <Box
      component="form"
      onSubmit={formik.handleSubmit}
      sx={styles.containerFormSearch}
    >
      <InputBase
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        name="searchInput"
        placeholder="Buscar un libro"
        sx={styles.inputFormSearch}
      />
      <Button
        sx={styles.buttomFormSearch}
        endIcon={<SearchIcon />}
        type="submit"
      >
        Buscar
      </Button>
    </Box>
  );
};

export default SearchInput;
