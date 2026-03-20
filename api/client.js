import axios from 'axios';

// IMPORTANT: Use your IPv4 address from image_845f82.png (192.168.1.102)
const apiClient = axios.create({
  baseURL: 'http://192.168.1.102:3000', 
  timeout: 10000,
});

export default apiClient;