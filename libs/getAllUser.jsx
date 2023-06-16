import axios from "axios";

// create server component to get users data
const getAllUser = async () => {
  //get response
  const response = await axios.get("http://localhost:3000/api/user");

  // validation
  if (!response.data) throw new Error("Users Data not found");

  // send data
  return response.data.users;
};

export default getAllUser;
