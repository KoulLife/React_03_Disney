import React, {useCallback, useEffect, useState} from 'react';
import axios from "../api/axios";
import styled from "styled-components";
import "./Row.css"
import MovieModal from "./MovieModal";

const Row = ({title, id, fetchUrl}) => {

  const [modalOpen, setModalOpen] = useState(false);
  const [movies, setMovies] = useState([])
  const [movieSelected, setMovieSelection] = useState({})

  const handleClick = (movie) => {
    setModalOpen(true);
    setMovieSelection(movie);
  }

  const fetchMovieData = useCallback(async () => {
    const response = await axios.get(fetchUrl);
    setMovies(response.data.results);
  },[fetchUrl]);

  useEffect(() => {
    fetchMovieData();
  },[fetchMovieData]);

  return (
    <Container>
      <h2>{title}</h2>
      <div className="slider">
        <div className="slider__arrow-left">
          <span className="arrow"
                onClick={() => {
                  document.getElementById(id).scrollLeft -= window.innerWidth - 80
                }}
          >
            {"<"}
          </span>
        </div>
        <div id={id} className="row__posters">
          {movies.map(movie => (
            <img
              key={movie.id}
              className="row__poster"
              src={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`}
              alt={movie.name}
              onClick={() => {handleClick(movie)}}
            />
          ))}
        </div>
        <div className='slider__arrow-right'>
          <span className='arrow'
            onClick={() => {
              document.getElementById(id).scrollLeft += window.innerWidth - 80
            }}
          >
            {">"}
          </span>
        </div>
      </div>

      { modalOpen &&
        <MovieModal
          {...movieSelected}
          setModalOpen = {setModalOpen}
        />
      }

    </Container>
  );
};

export default Row;

const Container = styled.div`
  padding: 0 0 26px;
`;

const Content = styled.div``;

const Wrap = styled.div`
  width: 95%;
  height: 95%;
  padding-top: 56.25%;
  border-radius: 10px;
  box-shadow: rgb(0 0 0/69%) 0px 26px 30px -10px,
              rgb(0 0 0/73%) 0px 16px 10px -10px;
  cursor: pointer;
  overflow: hidden;
  position: relative;
  transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
  border: 3px solid rgba(249, 249, 249, 0.1);

  img {
    inset: 0px;
    display: block;
    height: 100%;
    object-fit: cover;
    opacity: 1;
    position: absolute;
    width: 100%;
    transition: opacity 500ms ease-in-out;
    z-index:1;
  }
  &:hover {
    box-shadow: rgb(0 0 0 / 80%) 0px 40px 58px -16px,
       rgb(0 0 0 / 72%) 0px 30px 22px -10px;
    transform: scale(0.98);
    border-color: rgba(249, 249, 249, 0.8);
  }
`;
