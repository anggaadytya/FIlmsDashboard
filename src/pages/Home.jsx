// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from "react";
import Banner from "../components/Banner";
import GamesByGenresId from "../components/GamesByGenresId";
import GenreList from "../components/GenreList";
import TrendingGames from "../components/TrendingGames";
import GlobalApi from "../Services/GlobalApi";

function Home() {
  const [allGamesList, setAllGamesList] = useState();
  const [gameListByGenres, setGameListByGenres] = useState([]);
  const [selctedGenresName, setSelctedGenresName] = useState("Action");

  useEffect(() => {
    getAllGamesList();
    getGamesListByGenresId(4);
  }, []);

  const getAllGamesList = () => {
    GlobalApi.getAllGames.then((resp) => {
      setAllGamesList(resp.data.results);
    });
  };

  const getGamesListByGenresId = (id) => {
    GlobalApi.getAllListByGenreId(id).then((resp) => {
      setGameListByGenres(resp.data.results);
    });
  };

  return (
    <div className="grid grid-cols-4 px-8">
      <div className="h-full hidden md:block">
        <GenreList
          GenereId={(GenereId) => getGamesListByGenresId(GenereId)}
          selectedGenreName={(name) => setSelctedGenresName(name)}
        />
      </div>
      <div className="col-span-4 md:col-span-3">
        {allGamesList?.length > 0 && gameListByGenres.length > 0 ? (
          <div>
            <Banner gameBanner={allGamesList[0]} />
            <TrendingGames gameList={allGamesList} />
            <GamesByGenresId
              gameList1={gameListByGenres}
              selctedGenresName={selctedGenresName}
            />
          </div>
        ) : null}
      </div>
    </div>
  );
}

export default Home;
