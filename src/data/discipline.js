import { useQuery } from "react-query";
import { api, customUseMutation, defaultOptions } from ".";

// useQuerys
const findAll = ({
  queryKey = "Alldisciplines",
  fetcher = api.user.findAll,
  options = defaultOptions,
}) => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  return useQuery(queryKey, fetcher, options);
};

const findOne =
  (license) =>
  ({
    queryKey = "Discipline",
    fetcher = () => api.discipline.findAll(license),
    options = defaultOptions,
  }) => {
    return useQuery(queryKey, fetcher, options);
  };

// useMutates
const add = () => customUseMutation(api.discipline.add, "Alldisciplines");
const deleteOne = () =>
  customUseMutation(api.discipline.deleteOne, "Discipline");

const discipline = {
  query: {
    findAll,
    findOne,
  },
  mutation: {
    add,
    deleteOne,
  },
};

export default discipline;
