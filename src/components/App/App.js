import React, { useState } from 'react';
import ContentHolderComponent from '../ContentHolder/ContentHolderComponent';
import { TopComponent } from '../TopComponent/TopComponent';
import movieList from '../../Movies.json';

export default function App() {
    const [movies, setMovies] = useState(movieList);

    const onSearch = (query) => {
        const filteredMovies = query.trim()
            ? movieList.filter((item) =>
                new RegExp(query.trim(), 'i').test(item.title)
            )
            : movieList;
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
