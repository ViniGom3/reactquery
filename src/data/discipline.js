import { api, CustomUseQuery, CustomUseMutation } from ".";

const findAll = () => CustomUseQuery("allDisciplinas", api.discipline.findAll);

// useQuery
const findOne = (id) =>
  CustomUseQuery(`disciplina - ${id}`, api.discipline.findOne(id));

// useMutates
const add = () => CustomUseMutation(api.discipline.add, "allDisciplinas");
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
