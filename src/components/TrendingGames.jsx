import React, { useEffect } from "react";

function TrendingGames({ gameList }) {
  useEffect(() => {
    console.log("gamelist:", gameList);
  });

  return (
    <div className=" mt-5 hidden md:block">
      <h2 className="font-bold text-[30px]  dark:text-white mb-3">Trending Games</h2>
      <div className="md:grid md:grid-cols-3 gap-4 lg:grid-cols-4 ">
        {gameList.map(
          (item, index) =>
            index < 4 && (
              <div className="relative group hover:scale-110 transition-all duration-300 ease-in-out cursor-pointer">
                <img
                  src={item.background_image}
                  className=" h-[270px] rounded-lg object-cover"
                />
                <h2 className="text-center text-[20px] font-bold text-white absolute bottom-0 p-3">
                  {item.name}
                </h2>
              </div>
            )
        )}
      </div>
    </div>
  );
}

export default TrendingGames;
