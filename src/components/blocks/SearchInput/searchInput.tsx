import "./SearchInput.css";
import React, { ChangeEvent, useState } from "react";
import { getGoogleBooksByTitle } from "services";

interface SearchInputProps {
  setResponse: Function;
}

const SearchInput = ({ setResponse }: SearchInputProps) => {
  const [searchValue, setSearchValue] = useState("");

  function handleInputChange(event: ChangeEvent<HTMLInputElement>) {
    setSearchValue(event.target.value);
  }

  const getBooks = async (title: string = "javascript") => {
    try {
      const books = await getGoogleBooksByTitle(title);
      setResponse(books);
    } catch (error) {
      console.error(error);
    }
  };

  React.useEffect(() => {
    getBooks();
  }, []);

  return (
    <div className="search">
      <h1>GOOGLE BOOKS</h1>
      <input
        className="search-input"
        type="text"
        placeholder="Buscar un libro"
        value={searchValue}
        onChange={handleInputChange}
      />
      <button className="search-button" onClick={() => getBooks(searchValue)}>
        Buscar
      </button>
    </div>
  );
};

export default SearchInput;
