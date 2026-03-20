import axios from 'axios';
import Constants from 'expo-constants'; 
const { expoConfig } = Constants;

// 1. Detect the IP address dynamically
// expoConfig handles the different ways Expo might be running (tunnel vs lan)
const host = 
  expoConfig?.hostUri?.split(':').shift() ||
  Constants.experienceId?.split(':').shift() ||
  'localhost';  // fallback to localhost if everything else fails

const API_URL = host ? `${host}:5000` : `api.example.com`;

// 2. Set the global default URL
axios.defaults.baseURL = `http://${API_URL}`;

// 3. Export this "enhanced" axios
export default axios;