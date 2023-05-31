import React, { useState } from "react";
import SearchIcon from '@material-ui/icons/Search';
import bookService from "../../service/bookservice";
import styled from "@mui/system/styled";
import IconButton from "@material-ui/core/IconButton";

const SearchForm = styled("form")`
  display: flex;
  align-items: center;
  background-color: grey;
  //border-radius: 4px;
  padding: 3px;
  padding-left: 5px;
  padding-right: 5px;
  width: auto;

  & input {
    border: none;
    outline: none;
    padding: 10px;
    width:15cm;
    font-size: 16px;
  }
`;
const Searchcenter = styled("form")`
  margin:auto;

`;

const SearchButton = styled(IconButton)`
  && {
    color: white;
    padding: 8px;
    margin-left: 5px;
    
    border-radius: 3px;
    &:hover {
      background-color: grey;

    }
  }
`;

export default function Searchb() {
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
      <SearchForm name="searchForm" onSubmit={handleSearch}>
        <Searchcenter>
          <input
            type="text"
            placeholder="Search for a book  "
            value={query}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <SearchButton onClick={handleSearch} type='submit' color="inherit" >
            <SearchIcon />
          </SearchButton>
        </Searchcenter>
      </SearchForm>
      <span>

        {books.map((book) => (
          <li key={book.id}>{book.name}</li>
        ))}
      </span>
    </>
  );

}
