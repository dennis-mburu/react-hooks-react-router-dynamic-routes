import React from "react";
import {useParams} from "react-router-dom"

function MovieShow({movies}) {

  const params = useParams();
  // console.log(params)
  // console.log(movies)
  // console.log(movies[params.movieId])
  return (
    <div>
      {/* <h3>Movies Show Component!</h3> */}
      <h3>{movies[params.movieId].title}</h3>
    </div>
  );
}

export default MovieShow;