import React, { useState } from 'react'
import SearchImg from '../img/search.png'
import { key, baseUrl } from '../utils';


export default function Search() {
  const [value, setValue] = useState("")
  const [data, setData] = useState(null)


  function handleChange(e) {
    setValue(e.target.value)
    search(key, e.target.value)
  }

  async function search(key, val) {
    if (val.length > 0) {
      try {
        let response = await fetch(`${baseUrl}/search/movie?api_key=${key}&language=en-US&query=${val}&page=1&include_adult=false`);
        const data = await response.json();
        setData(data)
      } catch (err) {
        console.error(err);
      }
    }
  }

  return (
    <div className="search-bar">
      <div class="inner-search">
        <span >
          <img src={SearchImg}/>
        </span>
        <input type="text" placeholder="Search" onChange={handleChange} />
      </div>
      <div class="search_result">
        {value.length > 0 && data && data.results.map(({ title, backdrop_path, }) =>
          <a href="">
            <div class="movie-caption">
              <div className="movie-cart" style={{ background: backdrop_path === null ? "#eee" : `url("https://image.tmdb.org/t/p/w342${backdrop_path}")` }} ></div>
              <h3 class="title">{title}</h3>
            </div>
          </a>
        )}
      </div>
    </div>
  )
}
