import axios from 'axios';

//to get image url from db
export const getImageUrl = async (imageId: string): Promise<string> => {
    try {
      const response = await axios.get(`http://192.168.1.118:88/api/Image/${imageId}`);
      return response.data.url; // Ajusta esto según la estructura de tu respuesta API
    } catch (error) {
      console.error('Error fetching image URL:', error);
      return ''; // Devuelve una cadena vacía en caso de error
    }
  };