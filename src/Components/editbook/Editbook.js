import React, { useEffect, useMemo, useState } from "react";
import { Button, FormControl, MenuItem, Table, TableBody, TableCell, TableContainer, TableHead, TablePagination, TableRow, TextField } from "@material-ui/core";
import bookService from "../../service/bookservice";
import { styled } from '@mui/system';
import { Paper } from "@material-ui/core";
import { makeStyles } from '@material-ui/core/styles';
import categoryService from "../../service/categorysevices";
import { Pagination } from "@material-ui/lab";


const Title = styled("span")`
  font-size: 2rem;
  font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;

`;

const Pagewrapper = styled("div")`
    & ul{
        float: center;
        justify-content: center;
        align-items: center;
        align-content: center;
        padding:0.3cm;
    }
`;




const useStyles = makeStyles((theme) => ({
    formControl: {
        margin: theme.spacing(1),
        minWidth: 120,
    },
    selectEmpty: {
        marginTop: theme.spacing(2),
    },
    root: {
        width: '100%',
    },
    paper: {
        width: '75%',
        marginBottom: theme.spacing(3),
    
    },
    table: {
        minWidth: 750,
    },
   

}));

const defaultFilter = {
    pageIndex: 1,
    pageSize: 10,
    keyword: "",
};


const Editbook = () => {
    const classes = useStyles();

    const [bookResponse, setBookResponse] = useState({
        pageIndex: 0,
        pageSize: 10,
        totalPages: 1,
        items: [],
        totalItems: 0,
    });

    const [categories, setCategories] = useState([]);
    const [filters, setFilters] = useState(defaultFilter);

    useEffect(() => {
        getAllCategories();
    }, []);

    useEffect(() => {
        const timer = setTimeout(() => {
            if (filters.keyword === "") delete filters.keyword;
            searchAllBooks({ ...filters });
        }, 500);
        return () => clearTimeout(timer);
    }, [filters]);

    const searchAllBooks = (filter) => {
        bookService.getAll(filter).then((res) => {
            setBookResponse(res);
        });
    };

    const getAllCategories = async () => {
        await categoryService.getAll().then((res) => {
            if (res) {
                setCategories(res);
            }
        });
    };

    const books = useMemo(() => {
        const bookList = [...bookResponse.items];
        if (bookList) {
            bookList.forEach((element) => {
                element.category = categories.find(
                    (a) => a.id === element.categoryId
                )?.name;
            });
            return bookList;
        }
        return [];
    }, [categories, bookResponse]);


    return (

        <div >
            <Title ><u>Books</u></Title>
            <div className={classes.root}>
                <Paper className={classes.paper}>
                    <TableContainer>
                        <Table className={classes.table}>
                            <TableHead >
                                <TableRow>
                                    <TableCell >NAME</TableCell>
                                    <TableCell >PRICE</TableCell>
                                    <TableCell >CATEGORY</TableCell>
                                    <TableCell >Edit</TableCell>
                                    <TableCell >Delete</TableCell>

                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {bookResponse?.items?.map((row, index) => (
                                    <TableRow key={row.id}>
                                        <TableCell>{row.name}</TableCell>
                                        <TableCell>{row.price}</TableCell>
                                        <TableCell>
                                            {categories.find((c) => c.id === row.categoryId)?.name}
                                        </TableCell>
                                        <TableCell>
                                            <Button
                                                type="button"
                                                className="green-btn btn"
                                                variant="contained"
                                            >
                                                Edit
                                            </Button>
                                        </TableCell>
                                        <TableCell>
                                            <Button
                                                type="button"
                                                className="green-btn btn"
                                                variant="contained"
                                            >
                                                Delete
                                            </Button>
                                        </TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </TableContainer>
                    <TablePagination
                    rowsPerPageOptions={[5, 10, 25]}
                    component="div"
                    // count={bookResponse.totalItems}
                    rowsPerPage={filters.pageSize||0}
                   
                    onRowsPerPageChange={(e)=>{
                        setFilters({ ...filters, pageIndex: 1,pageSize:Number(e.target.value) })

                    }}
        />
                </Paper>
            </div>

            <Pagewrapper>
                <Pagination
                    count={bookResponse.totalPages}
                    page={filters.pageIndexs}
                    onChange={(e, newpage) => {
                        setFilters({ ...defaultFilter, pageIndex: newpage })
                    }
                    }
                />
            </Pagewrapper>

        </div>
    );
};

export default Editbook