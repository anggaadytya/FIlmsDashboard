// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from "react";
import GlobalApi from "../Services/GlobalApi";

function GenreList({GenereId, selectedGenreName}) {
  const [genreList, setGenreList] = useState([]);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    getGenreList();
  }, []);

  const getGenreList = () => {
    GlobalApi.getGenreList.then((resp) => {
      setGenreList(resp.data.results);
    });
  };

  return (
    <div>
      <h2 className="text-[30px] font-bold dark:text-white">Genre</h2>
      {genreList.map((item, index) => (
        // eslint-disable-next-line react/jsx-key
        <div
          onClick={() => {setActiveIndex(index);GenereId(item.id);selectedGenreName(item.name)}}
          className={`flex gap-2 items-center mb-2 cursor-pointer hover:bg-gray-300 rounded-lg p-2 group hover:dark:bg-gray-600 ${
            activeIndex == index ? "bg-gray-300 dark:bg-gray-600" : null
          }`}
        >
          <img
            src={item.image_background}
            className={`w-[40px] h-[40px] object-cover rounded-lg group-hover:scale-105 transition-all ease-out duration-300 ${activeIndex==index?"scale-105":null}`}
          />
          <h3 className={`dark:text-white text-[18px] group-hover:font-bold ease-out duration-300 ${activeIndex==index?"font-bold":null}`}>
            {item.name}
          </h3>
        </div>
      ))}
    </div>
  );
}

export default GenreList;
