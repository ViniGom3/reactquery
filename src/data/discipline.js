import { api, CustomUseQuery, CustomUseMutation } from ".";

const findAll = () => CustomUseQuery("Alldisciplines", api.discipline.findAll);

// useQuery
const findOne = (id) =>
  CustomUseQuery("Discipline", api.discipline.findOne(id));

// useMutates
const add = () => CustomUseMutation(api.discipline.add, "Alldisciplines");
const deleteOne = () =>
  CustomUseMutation(api.discipline.deleteOne, "Discipline");

export const discipline = {
  query: {
    findAll,
    findOne,
  },
  mutation: {
    add,
    deleteOne,
  },
};
