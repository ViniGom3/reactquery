import { useQuery } from "react-query";

const defaultQueryKey = "user";

const defaultFetcher = async () => {
  await new Promise((resolve) => {
    setTimeout(resolve, 2000);
  });
  return fetch("https://jsonplaceholder.typicode.com/users/1").then((data) =>
    data.json()
  );
};
const defaultOptions = {
  staleTime: 10000,
};

const useQueryUser = ({
  queryKey = defaultQueryKey,
  fetcher = defaultFetcher,
  options = defaultOptions,
}) => {
  return useQuery(queryKey, fetcher, options);
};

export default useQueryUser;
