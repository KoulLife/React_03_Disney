import React, {useEffect, useState} from 'react';
import {useLocation, useNavigate} from "react-router-dom";
import axios from "../../api/axios";
import {useDebounce} from "../../hooks/useDebounce";
import "./SearchPage.css";

const SearchPage = () => {
  const navigate = useNavigate();
  const [searchResults, setSearchResults] = useState([]); //검색 결과 저장

  const useQuery = () => {
    return new URLSearchParams(useLocation().search);
  };

  let query = useQuery();
  const searchTerm = query.get("q");
  const debouncedSearchTerm = useDebounce(searchTerm, 500);

  const fetchSearchMovies = async (searchTerm) => {
    try {
      const response = await axios.get(`/search/multi?include_adult=false&query=${searchTerm}`);
      setSearchResults(response.data.results);
    }
    catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    if (debouncedSearchTerm){
      fetchSearchMovies(debouncedSearchTerm)
    }
  }, [debouncedSearchTerm]);

  // 검색결과 길이로 검색
  if (searchResults.length > 0){
    return (
      <section className='search-container'>
        {searchResults.map((movie) => {
          if(movie.backdrop_path !== null && movie.media_type !== "person") {
            const movieImageUrl = "https://image.tmdb.org/t/p/w500" + movie.backdrop_path;
            return (
              <div className='movie' key={movie.id}>
                <div className='movie__column-poster' onClick={() => navigate(`/${movie.id}`)} >
                  <img src={movieImageUrl} alt="movie" className='movie__poster' />
                </div>
              </div>
            )
          }
        })}
      </section>
    )
  } else{
    return (
      <section className="no-results">
        <div className="no-results__text">
          <p>
            찾고자 하시는 검색결과 "{searchTerm}"는 없습니다.
          </p>
        </div>
      </section>
    );
  }

};

export default SearchPage;