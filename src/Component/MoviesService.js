import fetchJson from './FetchData/FetchData';

const fetchAll = () => {
    return fetchJson('movies', 'GET');
};

const deleteOneMovie = id => {
    return fetchJson(`movies/${id}`, 'DELETE');
};

const postMovie = Movie => {
    return fetchJson(`movies`, 'POST', Movie);
}

const editMovie = ( movie ,id) => {
    return fetchJson('movies/' + id, 'PUT', movie);
}
export {fetchAll,deleteOneMovie,postMovie, editMovie};

