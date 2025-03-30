import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://api.themoviedb.org/3',
  params: {
    api_key: '7d4f3f33917cfd4bba06c965469de1cd',
    language: 'ko-KR',
  }
});

export default instance;
