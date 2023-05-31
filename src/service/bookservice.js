import request from "./request";
const STRING = "api/book";

const searchBook = (searchtext) => {
    const url = `${STRING}/search?keyword=${searchtext}`;
    return request.get(url).then((res) => {
        return res;
    });
};

const getById = async (id) => {
    const url = `${STRING}/byId?id=${id}`;
    return request.get(url).then((res) => {
        return res;
    });
};

const getAllBooks = () => {
    const url = `${STRING}/all`;
    return request.get(url).then((res) => {
        return res;
    })
};

const getAll = async (params) => {
    const url = `${STRING}`;
    return request.get(url, { params }).then((res) => {
        return res;
    })
};

const bookService = {
    searchBook,
    getAllBooks,
    getById,
    getAll
}

export default bookService;