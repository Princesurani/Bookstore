import React, { useState } from "react";
import SearchIcon from '@material-ui/icons/Search';
import bookService from "../../service/bookservice";
import styled from "@mui/system/styled";
import IconButton from "@material-ui/core/IconButton";

const SearchForm = styled("form")`
  display: flex;
  align-items: center;
  background-color: rgb(220, 220, 220);
  //border-radius: 4px;
  padding: 5px;
  padding-left: 5px;
  padding-right: 5px;
  width: auto;
  margin-top:30px;
 // box-shadow: 0 2px 4px 3px rgba(0,0,0,.3);


  & input {
    border: none;
    outline: none;
    padding: 10px;
    width:15cm;
    font-size: 16px;
    border-radius: 5px;
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
    
    border-radius: 5px;
    &:hover {
      background-color: darkblue;

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
    <div>
      <SearchForm name="searchForm" onSubmit={handleSearch}>
        <Searchcenter>
          <input
            type="text"
            placeholder="Search book here  "
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
    </div>
  );

}
