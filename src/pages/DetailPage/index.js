import React, { useEffect, useState } from 'react'
import {useParams} from "react-router-dom";
import axios from "../../api/axios";

const DetailPage = () => {
  // movieId로 파라미터 받기
  let {movieId} = useParams();
  // 객체로 movie 초기화
  const [movie, setMovie] = useState({});

  // movieId가 변경시 fetchData() 실행
  useEffect(() => {
    // 비동기로 fetchData 처리
    async function fetchData(){
      const response = await axios.get(
        `/movie/${movieId}`
      )
      console.log('PARAM',`/movie/${movieId}`)
      setMovie(response.data);
    }
    fetchData();
  },[movieId]);

  if (!movie) return null;

  return (
    <section>
      <img
        className='modal__poster-img'
        src={`https://image.tmdb.org/t/p/original/${movie.backdrop_path}`}
        alt="img"/>
    </section>
  );
};

export default DetailPage;