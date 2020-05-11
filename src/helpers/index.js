import api from '../services/api';
import env from '../services/config';

export const getMovies = async () => await api.get(`/3/list/1?api_key=${env.API_KEY}`);
