import { Box } from "@mui/material";
import { useQuery } from "react-query";
// import useQueryUser from "../data/useQueryUser";

const UserPage = () => {
  const useQueryUser = () => {
    return useQuery("user", () => {
      return fetch("https://jsonplaceholder.typicode.com/users/1").then(
        (data) => data.json()
      );
    });
  };

  const { data, isLoading, error } = useQueryUser();

  return (
    <Box>
      <h1>{data.name}</h1>
      <h2>{data.username}</h2>
      <h2>{data.email}</h2>
      <h2>{data.address.street}</h2>
      <h2>{data.address.suite}</h2>
      <h2>{data.city}</h2>
      <h2>{data.zipcode}</h2>
      <h2>{data.phoner}</h2>
    </Box>
  );
};

export default UserPage;
