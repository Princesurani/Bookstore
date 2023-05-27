import React, { useState } from "react";
import axios from "axios";
import SearchIcon from '@material-ui/icons/Search';
import bookService from "../sevice/bookservice";

export default function Searchbar() {
  const [query, setSearchTerm] = useState("");
  const [books, setBooks] = useState([]);

  const handleSearch = async (e) => {
    e.preventDefault();
    try {
      bookService.searchBook(query)
      .then((res) => {
        // navigate("/login");
        console.log(res);
        setBooks(res);
      })
      
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <form onSubmit={handleSearch}>
        <input
          type="text"
          placeholder="Search for a book"
          value={query}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button type="submit"><SearchIcon/></button>
      </form>
      <span>
      <ul>
        {books.map((book) => (
          <p key={book.id}>{book.name}</p>
        ))}
      </ul>
      </span>
    </>
  );

}
