import api from './api';

const getPrefixLanguage = () => {
    const prefix = localStorage.getItem('language');
    const language = `${prefix}`.split('"').join('');
    return language;
};

export const getMovies = async () => {
    const language = getPrefixLanguage();
    return await api.get(`/3/list/1?api_key=${process.env.REACT_APP_API_KEY}&language=${language}`);
};

export const getMovieImages = async (movieId) => {
    const language = getPrefixLanguage();
    return await api.get(`/3/movie/${movieId}/images?api_key=${process.env.REACT_APP_API_KEY}&language=${language}`);
};
