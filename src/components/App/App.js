import React, { useState } from 'react';
import ContentHolderComponent from '../ContentHolder/ContentHolderComponent';
import { TopComponent } from '../TopComponent/TopComponent';
import movieList from '../../Movies.json';

import './App.css';

export default function App() {
    const [movies, setMovies] = useState(movieList);

    const onSearch = (query) => {
        const filteredMovies = movies.filter((item) =>
            new RegExp(query, 'i').test(item.title)
        );
        setMovies(filteredMovies);
    };
    return (
        <React.StrictMode>
            <div className="container">
                <TopComponent onSearch={onSearch} />
                <ContentHolderComponent movies={movies} />
            </div>
        </React.StrictMode>
    );
}
