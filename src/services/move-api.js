// Ключ API (v3 auth)
// 09f4627130af44250aae98d65f554930
// Пример API-запроса
// https://api.themoviedb.org/3/movie/550?api_key=09f4627130af44250aae98d65f554930
// Ключ доступа к API (v4 auth)
// eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwOWY0NjI3MTMwYWY0NDI1MGFhZTk4ZDY1ZjU1NDkzMCIsInN1YiI6IjYxN2Q1MjY3ZTMyM2YzMDA5MTJkOTQyNCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.WIdk27u8ajdMPFfLUGU8n6k3wR5qIUO-CtnkREfWia8
// For Home Page  - https://api.themoviedb.org/3/trending/all/day?api_key=<<api_key>>
// For movie info - https://api.themoviedb.org/3/movie/{movie_id}?api_key=<<api_key>>&language=en-US
// for movie cast - https://api.themoviedb.org/3/movie/{movie_id}/credits?api_key=<<api_key>>&language=en-US
// for movie reviews - https://api.themoviedb.org/3/movie/{movie_id}/reviews?api_key=<<api_key>>&language=en-US&page=1

import axios from 'axios';
export default class API {
  constructor() {
    this.api_key = '09f4627130af44250aae98d65f554930';
    this.api_url = 'https://api.themoviedb.org/3/';
    this.api_type = 'trending/movie/';
    this.api_time = 'day';
    this._searchQuery = '';
    this._page = 1;
  }

  get searchQuery() {
    return this._searchQuery;
  }

  set searchQuery(value) {
    return (this._searchQuery = value);
  }

  get page() {
    return this._page;
  }

  set page(value) {
    return (this._page += value);
  }

  resetPage() {
    return (this._page = 1);
  }

  async search() {
    let url = `${this.api_url}${this.searchQuery}?api_key=${this.api_key}
`;
    console.log(url);
    try {
      const result = await axios.get(url);
      const data = result.data;
      return data;
    } catch (error) {
      return error.message;
    }
  }
}
