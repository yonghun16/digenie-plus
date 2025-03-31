import React, { useState, useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import axios from '../../api/axios'

const SearchPage = () => {
  const [searchResults, setSearchResults] = useState([]);

  const useQuery = () => {
    return new URLSearchParams(useLocation().search);
  }

  let query = useQuery();
  let searchTerm = query.get("q");

  useEffect(() => {
    if(searchTerm) {
      fetchSearchMovie();
    }
  }, [searchTerm])

  const fetchSearchMovie = async (searchTerm) => {
    try {
      const response = await axios.get(`/search/multi?include_adult=false&query=${searchTerm}`);
      setSearchResults(response.data.result);
      console.log()
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div>SearchPage</div>
  )
}

export default SearchPage
