import React, { useState, useEffect } from 'react'
import { Row, Col } from 'antd';
import { key, baseUrl } from '../utils';
import play from '../img/play-button.png';
import { connect } from 'react-redux'


function Movies() {
  const [data, setData] = useState(null)
  const [movie, setMovie] = useState(null)

  useEffect(() => {
    getList(key);
  }, [])

  async function getList(key) {
    try {
      let response = await fetch(`${baseUrl}/movie/popular?api_key=${key}&language=en-US&page=35`);
      const data = await response.json();
      setData(data)
    } catch (err) {
      console.error(err);
    }
  }

  function handleClick(id) {
    alert(id)
    getMovie(key, id)
  }

  async function getMovie(key, id) {
    try {
      let response = await fetch(`${baseUrl}/movie/${id}?api_key=${key}&language=en-US`);
      const movieData = await response.json();
      setMovie(movieData)
      console.log(movie)
    } catch (err) {
      console.error(err);
    }
  }

  return (
    <div className="movie-section">
      <Row gutter={[32, 32]} >
        {data && data.results.map(({ title, backdrop_path, release_date, id }) =>
          <Col span={6} className="movie-cart" onClick={() => handleClick(id)}>
            <div className="movie-img" style={{ background: backdrop_path === null ? "#eee" : `url("https://image.tmdb.org/t/p/w342${backdrop_path}")` }} ></div>
            <img src={play} />
            <div class="movie-caption">
              <h3 class="title">{title}</h3>
              <div class="movie-info">
                <span class="movie-year">{release_date.substr(0, 4)}</span>
                <span class="movie-ganre"></span>
              </div>
            </div>
          </Col>
        )}
      </Row>
    </div>
  )
}

export default connect(mapStateToProps)(Movies)
