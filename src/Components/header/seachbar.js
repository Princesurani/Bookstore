import React from "react";
import { headerStyle } from "./style";
import { AppBar, Button, List, ListItem, TextField } from "@material-ui/core";
import { Link, NavLink } from "react-router-dom";
import shared from "../utils/shared";
import bookService from "../../service/bookservice";
import { useState } from "react";
import { useMemo } from "react";
import { toast } from "react-toastify";

const  Searchbar = () => {
  const classes = headerStyle();
  //   const authContext = useAuthContext();
  //   const cartContext = useCartContext();
  // const [open, setOpen] = useState(false);
  const open = false;
  const [query, setquery] = useState("");
  const [bookList, setbookList] = useState([]);
  const [openSearchResult, setOpenSearchResult] = useState(false);

  const items = useMemo(() => {
    return shared.NavigationItems;
    // return shared.NavigationItems.filter(
    //   (item) =>
    //     !item.access.length || item.access.includes(authContext.user.roleId)
    // );
  }, []);

  const openMenu = () => {
    document.body.classList.toggle("open-menu");
  };

  const searchBook = async () => {
    const res = await bookService.searchBook(query);
    setbookList(res);
  };

  const search = () => {
    if(query)
    {
        document.body.classList.add("search-results-open");
        searchBook();
        setOpenSearchResult(true);
    }
    else{
        toast.error("Bad Request!");
    }
    
  };

  const cancle=()=>{
    setbookList([]);
    setOpenSearchResult(false);
    setquery("");
  }

  //   const addToCart = (book) => {
  //     if (!authContext.user.id) {
  //       navigate(RoutePaths.Login);
  //       toast.error("Please login before adding books to cart");
  //     } else {
  //       Shared.addToCart(book, authContext.user.id).then((res) => {
  //         if (res.error) {
  //           toast.error(res.error);
  //         } else {
  //           toast.success("Item added in cart");
  //           cartContext.updateCart();
  //         }
  //       });
  //     }
  //   };

  return (
    <div className={classes.headerWrapper}>
      <AppBar className="site-header" id="header" position="static">
        
        <div
          className="search-overlay"
          onClick={() => {
            setOpenSearchResult(false);
            document.body.classList.remove("search-results-open");
          }}
        ></div>
        <div className="header-search-wrapper">
          <div className="container">
            <div className="header-search-outer">
              <div className="header-search-inner">
                <div className="text-wrapper">
                  <TextField
                    id="text"
                    name="text"
                    placeholder="What are you looking for..."
                    variant="outlined"
                    value={query}
                    onChange={(e) => setquery(e.target.value)}
                  />

                  {openSearchResult && (
                    <>
                      <div className="product-listing">
                        {bookList?.length === 0 && (
                          <p className="no-product">No product found</p>
                        )}

                        {/* <p className="loading">Loading....</p> */}
                        <List className="related-product-list">
                          {bookList?.length > 0 &&
                            bookList.map((item, i) => {
                              return (
                                <ListItem key={i}>
                                  <div className="inner-block">
                                    <div className="left-col">
                                      <span className="title">{item.name}</span>
                                      <p>{item.description}</p>
                                    </div>
                                    <div className="right-col">
                                      <span className="price">
                                        {item.price}
                                      </span>
                                      <p>
                                      <Link onClick={() => {}}>
                                        Add to cart
                                      </Link>
                                      </p>
                                    </div>
                                  </div>
                                </ListItem>
                              );
                            })}
                        </List>
                      </div>
                    </>
                  )}
                </div>
                
                <Button
                  type="submit"
                  className="green-btn btn"
                  variant="contained"
                  style={{backgroundColor:"darkblue"}}
                  disableElevation
                  onClick={search}
                  
                >
                  Search
                </Button>
                <Button
                  type="submit"
                  className="green-btn btn"
                  variant="contained"
                  style={{backgroundColor:"rgb(204, 5, 5)"}}
                  disableElevation
                  onClick={cancle}
                >
                  Clear
                </Button>
                
              </div>
            </div>
          </div>
        </div>
      </AppBar>
    </div>
  );
};

export default Searchbar;