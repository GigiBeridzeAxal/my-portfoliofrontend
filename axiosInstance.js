import axios from "axios";

const axiosInstance = axios.create({
    baseURL: "https://api.example.com", // Change this to your API URL
    headers: {
      "Content-Type": "application/json",
    },
  });


  export default axiosInstance;