/* eslint-disable react/jsx-key */
// eslint-disable-next-line no-unused-vars
import React, { useEffect } from "react";

function GamesByGenresId({ gameList1, selctedGenresName }) {
  useEffect(() => {
    console.log("GamelistById:", gameList1);
  }, []);

  return (
    <div className="mt-10  md:block">
      <h2 className="font-bold text-[30px]  dark:text-white mt-10 mb-3">
        {selctedGenresName} Games
      </h2>
      <div className="md:grid md:grid-cols-3 gap-4 lg:grid-cols-4 ">
        {gameList1.map((item) => (
          <div>
            <div className="relative group hover:scale-110 transition-all duration-300 ease-in-out cursor-pointer">
              <img
                src={item.background_image}
                className=" h-[270px] rounded-lg object-cover"
              />
              <h2 className="text-center text-[20px] font-bold text-white absolute bottom-3 p-3">
                {item.name}
              </h2>
              <h3 className="absolute bottom-0 text-white font-bold pl-2">
                ⭐{item.rating}
              </h3>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default GamesByGenresId;
