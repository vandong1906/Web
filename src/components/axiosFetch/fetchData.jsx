import axios from "axios";

const fetchData = axios.create({
  baseURL: process.env.REACT_APP_APi_URL,
  headers: {
    'Content-Type': 'application/json'
  }
});

fetchData.postData = async (endpoint,data) => {
  try {
    const response = await  fetchData.post(endpoint, data);
    return response.data;
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error; 
  }
};
fetchData.getData = async (endpoint) => {
  try {
    const response = await fetchData.get(endpoint);
    return response.data;
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error; 
  }
};

fetchData.putData= async (endpoint,data) => {
  try {
    const response = await fetchData.put(endpoint,data);
    return response.data;
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error; 
  }
};
fetchData.removeData= async (endpoint) => {
  try {
    const response = await fetchData.delete(endpoint);
    return response.data;
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error; 
  }
};


export default fetchData;