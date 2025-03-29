import axios from 'axios';

const instance = axios.create({
  baseURL: 'http://api.themoviedb.org/3',
  headers: {
    'Content-Type': 'application/json',
    params: {
      api_key: 'b44772f7a0248a5bb325cb228fcb12e9',
      language: 'ko-KR',
    }
  },
});

export default instance;
