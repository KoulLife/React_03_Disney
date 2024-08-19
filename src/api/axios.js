import axios from "axios";

// 인스턴스 생성
const instance = axios.create({
  baseURL: "https://api.themoviedb.org/3",
  params: {
    api_key: "1d42429cc8807cb2095e8e52311a627e",
    language: "ko-KR"
  }
})

export default instance;
