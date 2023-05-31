import Grid from '@material-ui/core/Grid';
import Bookcard from "../booklisting/Bookcard";

import styled from "@mui/system/styled";

const Bookdiv = styled("div")`
    margin:1cm
    `;


const Books = () => {

    return (
        <>
        <Bookdiv >
            <Grid container>
                
                <Grid item xs={4}>
                    <Bookcard name={"Rich Dad Poor Dad"} path="https://m.media-amazon.com/images/I/51Hfv2MfNGL._SX331_BO1,204,203,200_.jpg"/>
                </Grid>
                <Grid item xs={4}>
                    <Bookcard name={"Think and Grow Rich"} path="https://m.media-amazon.com/images/I/61y04z8SKEL._SX349_BO1,204,203,200_.jpg"/>
                </Grid>
                <Grid item xs={4}>
                    <Bookcard name={"Compound Effect"} path="https://m.media-amazon.com/images/I/41AP23Iy8GL._SX359_BO1,204,203,200_.jpg"/>
                </Grid>
                
            </Grid>
        </Bookdiv>
        </>
    )
};

export default Books;