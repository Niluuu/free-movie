import { key,baseUrl } from '../utils'

export const FETCH_MOVIE = 'FETCH_MOVIE'

export const fetchData = data => ({
  type: FETCH_MOVIE,
  data
})

const fetchMovie = data => dispatch => {
  dispatch(fetchData())
  return fetch(`${baseUrl}/movie/${id}?api_key=${key}&language=en-US`)
    .then(response => response.json())
    // .then(json => dispatch(receivePosts(subreddit, json)))
}