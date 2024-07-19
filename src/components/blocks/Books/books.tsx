import "./books.css";
import { Book as BookType } from "models";
import { Book } from "components/elements";

export interface BooksProps {
  books: BookType[];
}

const Books = ({ books }: BooksProps) => {
  return (
    <div className="books">
      {books.map((book) => (
        <Book key={book.id} book={book} />
      ))}
    </div>
  );
};

export default Books;
