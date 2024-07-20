import { FC, Fragment } from "react";
import { Book as BookType } from "models";
import { useFormik } from "formik";
import {
  Button,
  TextField,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from "@mui/material";

import BookDetail from "components/elements/bookDetail";

type DialogDetailBookProps = {
  isOpen: boolean;
  closeModal: Function;
  book?: BookType;
};

export const DialogDetailBook: FC<DialogDetailBookProps> = ({
  isOpen,
  closeModal,
  book,
}) => {
  const formik = useFormik({
    enableReinitialize: true,
    initialValues: { comment: "" },
    validate: (values) => {
      const errors: { comment?: string } = {};
      if (!values.comment) errors.comment = "El comentario es requerido.";
      return errors;
    },
    onSubmit: (values) => {
      closeModal(values.comment);
      formik.resetForm();
    },
  });

  return (
    <Fragment>
      <Dialog
        open={isOpen}
        onClose={() => closeModal()}
        PaperProps={{
          component: "form",
        }}
      >
        {book && <BookDetail book={book} />}
        <DialogTitle>Agregar a favoritos</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Para agregar esta película a tus favoritas, por favor escribe un
            comentario.
          </DialogContentText>

          <TextField
            autoFocus
            required
            name="comment"
            placeholder="Comentario"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            margin="dense"
            id="comment"
            fullWidth
            variant="standard"
            error={formik.touched.comment && Boolean(formik.errors.comment)}
            helperText={formik.touched.comment && formik.errors.comment}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={() => closeModal()}>Cancelar</Button>
          <Button
            type="submit"
            onClick={(e) => {
              e.preventDefault();
              formik.handleSubmit();
            }}
          >
            Agregar a favoritos
          </Button>
        </DialogActions>
      </Dialog>
    </Fragment>
  );
};

export default DialogDetailBook;
