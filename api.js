import axios from 'axios';

const API = axios.create({ baseURL: 'http://localhost:5000/api' });

export const createForm = (data) => API.post('/forms', data);
export const getForms = () => API.get('/forms');
export const getFormById = (id) => API.get(`/forms/${id}`);
export const submitResponse = (data) => API.post('/responses', data);
export const getResponses = (id) => API.get(`/responses/${id}`);
