import api from '../utils/api';

export const uploadImage = async (payload) => {
    const response = await api.post('upload', payload);
    return response.data;
};