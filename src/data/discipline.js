import { api, CustomUseQuery, CustomUseMutation } from ".";

// useQuery
const findAll = (options) => CustomUseQuery("allDisciplinas", api.discipline.findAll, options);
const findOne = (id, options) => CustomUseQuery(`disciplina - ${id}`, () => api.discipline.findOne(id), options);

// useMutates
const add = (options) => CustomUseMutation(api.discipline.add, {queryKey: "allDisciplinas", ...options});
const deleteOne = (options) => CustomUseMutation(api.discipline.deleteOne, {queryKey: "Discipline", ...options});

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
