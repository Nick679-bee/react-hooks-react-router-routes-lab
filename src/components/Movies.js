import React from "react";
//import { Link } from "react-router-dom";
import { movies } from "../data";

function Movies() {
  return <div>
    <h1>
      Movies Page
    </h1>
    {movies.map((item)=>{
      return <div key={item.title} > {item.title} {item.time} <ul>{item.genres.map(item=><li key={item}>{item}</li>)}</ul></div>
    })}
  </div>;
}

export default Movies;
