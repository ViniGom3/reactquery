import { useQuery } from "react-query";

const defaultQueryKey = "user";

const defaultFetcher = () =>
  fetch("https://jsonplaceholder.typicode.com/users/1").then((data) =>
    data.json()
  );

const defaultOptions = {
  staleTime: 10000,
};

export const defaultValues = {};

// const useQueryUser = (options) => {
//   const queryKey = options?.queryKey || defaultQueryKey;
//   const fetcher = options?.fetcher || defaultFetcher;
//   const option = options?.option || defaultOptions;

//   return useQuery(queryKey, fetcher, option);
// };

const useQueryUser = ({
  queryKey = defaultQueryKey,
  fetcher = defaultFetcher,
  options = defaultOptions,
}) => {
  return useQuery(queryKey, fetcher, options);
};

export default useQueryUser;

// import { useQuery } from "react-query";
// import axios from "axios";

// const defaultOptions = {
//   staleTime: 5000,
// };

// const useQueryUser = ({
//   queryKey = defaultQueryKey,
//   fetcher = defaultFetcher,
//   options = defaultOptions,
// }) => {
//   return useQuery(queryKey, fetcher, options);
// };

// const getUserById = async (userId) => {
//   const { data } = await axios.get(
//     `https://jsonplaceholder.typicode.com/users/${userId}`
//   );
//   return data;
// };

// export default function useQueryUser(userId) {
//   return useQuery(["user", userId], () => getUserById(userId));
// }
