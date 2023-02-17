import axios from "../axios/instanceAxios";

/* Can use axios from 'axios' 
  axios.get(url).then()
  axios.post(url, value).then()
  axios.put(url, value).then()
  axios.url(url).then()
 */

//Get DB (URL = (not contain localhost:5555/)
const getDatabase = async (resource, locate) => {
  try {
    let response = await axios.get(`${resource}/${locate}`);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

//Post DB (URL = not contain localhost:5555/)
const postDatabase = async (resource, locate, value) => {
  await axios.post(`${resource}/${locate}`, value).data;
};

//Put DB (URL = not contain localhost:5555/)
const putDatabase = async (resources, locate, value) => {
  await axios.put(`${resources}/${locate}`, value).data;
};

//Delete DB (URL = not contain localhost:5555/)
const deleteDatabase = async (resource, locate, value) => {
  await axios.delete(`${resource}/${locate}`);
};

const patchDatabase = async (resource, locate, value) => {
  return await axios.patch(`${resource}/${locate}`, value);
};

export {
  getDatabase,
  postDatabase,
  putDatabase,
  deleteDatabase,
  patchDatabase,
};
