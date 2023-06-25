import axios from "axios";


const key = "87dea22e1d3945faaeed325ee9592660";
const axiosCreate=axios.create({
    baseURL:'https://api.rawg.io/api'
});

const getGenreList = axiosCreate.get('/genres?key='+key);
const getAllGames = axiosCreate.get('/games?key='+key);
const getAllListByGenreId=(id)=>axiosCreate.get('/games?key='+key+'&genres='+id)



export default{
    getGenreList,
    getAllGames,
    getAllListByGenreId
}