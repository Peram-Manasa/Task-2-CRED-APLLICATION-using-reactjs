import axios from "axios";

const url = " http://localhost:5000/users";
export const addUser = async (data) => {
  try {
    return await axios.post(url, data);
  } catch (errors) {
    console.log(errors.message);
  }
};

export const getUsers = async () => {
  try {
     return await axios.get(url);
  } catch (errors) {
    console.log(errors.message);
  }
};


export const getUser = async (data) => {
    try {
       return await axios.get(`url/${data}`);
    } catch (errors) {
      console.log(errors.message);
    }
  }
  
  export const editUser = async (data,id) => {
    try {
       return await axios.put(`url/${id}`,data);
    } catch (errors) {
      console.log(errors.message);
    }
  }

  export const deleteUser = async (data,id) => {
    try {
       return await axios.delete(`url/${id}`);
    } catch (errors) {
      console.log(errors.message);
    }
  }
  
