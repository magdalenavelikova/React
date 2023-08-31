import { useState } from "react";
import { LatestGames } from "./LatestGame";

export const HomePage = ({ latestGames }) => {
  return (
    <>
      {/*<!--Home Page-->*/}
      <section id='welcome-world'>
        <div className='welcome-message'>
          <h2>ALL new games are</h2>
          <h3>Only in GamesPlay</h3>
        </div>
        <img src='./images/four_slider_img01.png' alt='hero' />

        <div id='home-page'>
          <h1>Latest Games</h1>

          {latestGames.map((g) => (
            <LatestGames key={g._id} {...g} />
          ))}

          {latestGames.length === 0 && (
            <p className='no-articles'>No games yet</p>
          )}
        </div>
      </section>
    </>
  );
};
