import request from "./request";
const STRING="api/book";

const searchBook=async(searchtext)=>{
    const url=`${STRING}/search?keyword=${searchtext}`;
    return request.get(url).then((res)=>{
        return res;
    });
};

const bookService={
    searchBook
}

export default bookService;