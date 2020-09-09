import React, { useState } from 'react';
import ContentHolderComponent from '../ContentHolder/ContentHolderComponent';
import { HeaderComponent } from '../HeaderComponent/HeaderComponent';
import { myContext } from '../../contextProvider';
import movieList from '../../consts/movies.json';

export default function App() {
    // eslint-disable-next-line prefer-const
    let [allMovies, setAllMovies] = useState(movieList);
    const [query, setQuery] = useState('');

    const addMovie = (movie) => {
        movie.id = allMovies.length;
        allMovies.push(movie);
        setAllMovies(allMovies);
        onSearch(query);
    };

    const editMovie  = (movie) => {
        allMovies = allMovies.filter(item => item.id !== movie.id);
        allMovies.push(movie);
        setAllMovies(allMovies);
        onSearch(query);
    };

    const deleteMovie = (movie) => {
        allMovies = allMovies.filter(item => item.id !== movie.id);
        onSearch(query);
    };

    const onSearch = (searchTerm) => {
        const trimmedQuery = searchTerm.trim();
        const filteredMovies = trimmedQuery
            ? allMovies.filter((item) =>
                new RegExp(trimmedQuery, 'i').test(item.title)
            )
            : [...allMovies];
        setQuery(trimmedQuery);
        setMovies(filteredMovies);
    };

    const  [movies, setMovies] =  useState(allMovies);

    return (
        <React.StrictMode>
            <div className="container">
                <myContext.Provider value={{ addMovie, editMovie, onSearch, deleteMovie, movies }}>
                    <HeaderComponent/>
                    <ContentHolderComponent  />
                </myContext.Provider>
            </div>
        </React.StrictMode>
    );
}
