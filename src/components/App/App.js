import React, { useState } from 'react';
import ContentHolderComponent from '../ContentHolder/ContentHolderComponent';
import { HeaderComponent } from '../HeaderComponent/HeaderComponent';
import movieList from '../../__const__/movies.json';

export default function App() {
    const [movies, setMovies] = useState(movieList);

    const onSearch = (query) => {
        const trimmedQuery = query.trim();
        const filteredMovies = trimmedQuery
            ? movieList.filter((item) =>
                new RegExp(trimmedQuery, 'i').test(item.title)
            )
            : movieList;
        setMovies(filteredMovies);
    };

    return (
        <React.StrictMode>
            <div className="container">
                <HeaderComponent onSearch={onSearch} />
                <ContentHolderComponent movies={movies} />
            </div>
        </React.StrictMode>
    );
}
