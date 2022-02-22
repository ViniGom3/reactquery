import { useQuery } from "react-query";
import { api, CustomUseMutation, defaultOptions } from ".";

const findAll = ({
  queryKey = "allUsers",
  fetcher = api.user.findAll,
  options = defaultOptions,
} = {}) => {  
  // eslint-disable-next-line react-hooks/rules-of-hooks
  return useQuery(queryKey, fetcher, {...defaultOptions, ...options});
};

const findOne = (license) => ({
    queryKey = "user",
    fetcher = () => api.user.findAll(license),
    options = defaultOptions,
  }= {}) => {
    return useQuery(queryKey, fetcher, options);
  };

const add = () => CustomUseMutation(api.user.add, {queryKey: "allUsers"});
const deleteOne = () => CustomUseMutation(api.user.deleteOne, {queryKey: "user"});



export const user = {
  query: {
    findAll,
    findOne,
  },
  mutation: {
    add,
    deleteOne,
  },
};


