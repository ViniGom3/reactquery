import { Box } from "@mui/material";
import useQueryUser, { defaultValues } from "../data/hooks";

// const modifiedValues = {
//   ...defaultValues,
//   queryKey: "user1",
// };

// ##################

// const useQueryUser = () => {
//   return useQuery("user", () => {
//     return fetch("https://jsonplaceholder.typicode.com/users/1").then((data) =>
//       data.json()
//     );
//   });
// };

const UserPage = () => {
  const { data, isLoading, isError } = useQueryUser({
    options: { staleTime: 0 },
  });

  if (isLoading) {
    return <Box>Loading...</Box>;
  }

  if (isError) {
    return <Box>Error</Box>;
  }

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
