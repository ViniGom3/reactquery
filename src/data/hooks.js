import { useQuery } from "react-query";
import axios from "axios";

const getUserById = async (userId) => {
  const { data } = await axios.get(
    `https://jsonplaceholder.typicode.com/users/${userId}`
  );
  return data;
};

export default function useQueryUser(userId) {
  return useQuery(["user", userId], () => getUserById(userId));
}
