import axios from "../axios/instanceAxios";

/* Can use axios from 'axios' 
  axios.get(url).then()
  axios.post(url, value).then()
  axios.put(url, value).then()
  axios.url(url).then()
 */

//Get DB (URL = (not contain localhost:5555/)
const getDatabase = async (resource, locate) => {
  return await axios.get(`${resource}/${locate}`);
};

//Post DB (URL = not contain localhost:5555/)
const postDatabase = async (resource, locate, value) => {
  return axios.post(`${resource}/${locate}`, value);
};

//Put DB (URL = not contain localhost:5555/)
const putDatabase = async (resources, locate, value) => {
  return await axios.put(`${resources}/${locate}`, value);
};

//Delete DB (URL = not contain localhost:5555/)
const deleteDatabase = async (resource, locate) => {
  return await axios.delete(`${resource}/${locate}`);
};

export { getDatabase, postDatabase, putDatabase, deleteDatabase };
