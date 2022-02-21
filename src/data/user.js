import { useQuery } from "react-query";
import { api, customUseMutation, defaultOptions } from ".";

const findAll = ({
  queryKey = "allUsers",
  fetcher = api.user.findAll,
  options = defaultOptions,
}) => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  return useQuery(queryKey, fetcher, options);
};

const findOne =
  (license) =>
  ({
    queryKey = "user",
    fetcher = () => api.user.findAll(license),
    options = defaultOptions,
  }) => {
    return useQuery(queryKey, fetcher, options);
  };

const add = () => customUseMutation(api.user.add, "allUsers");
const deleteOne = () => customUseMutation(api.user.deleteOne, "user");

const userQuery = {
  query: {
    findAll,
    findOne,
  },
  mutation: {
    add,
    deleteOne,
  },
};

export default userQuery;
