import React, { useState, useEffect } from 'react';

const App = () => {
    const [films, setFilms] = useState([]);
    const [loadFilms, setLoadFilms] = useState(false);


    useEffect(() => {
        fetch("http://ghibliapi.herokuapp.com/films")
            .then(res => res.json())
            .then(films => setFilms())
            .catch(err => console.log(err))
    }, [loadFilms]);

    const handleLoadFilms = () => {
        setLoadFilms(true);
    }

    if (!loadFilms) {
        return (
            <button onClick={handleLoadFilms}>Load Films</button>
        )
    }
    else {
        return (
            <div className="container">
                {films.map(film => (
                    <h1>{film.title}</h1>
                ))}
            </div>
        );
    }
};

export default App;