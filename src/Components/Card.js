import React from "react";

export default function Card({ movie }) {
  return (
    <div className="Card" key={movie.id}>
      <img
        alt=""
        src={"https://image.tmdb.org/t/p/original/" + movie.poster_path}
      />
      <h2>{movie.title}</h2>
      <p className="overview">{movie.overview}</p>
      <hr />
      <p>{movie.hasOwnProperty("release_date")>0 && ("Release date " + movie.release_date)}</p>
      <p>Vote : {movie.vote_average}</p>
      <p>{movie.hasOwnProperty("original_title")>0 && ("Original title : " + movie.original_title)}</p>
      <p>{movie.hasOwnProperty("origin_country")>0 && ("Origin country : " + movie.origin_country)}</p>
    </div>
  );
}
