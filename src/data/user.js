import { api, CustomUseMutation, CustomUseQuery } from ".";

        
// useQuery        
const findAll = (options) =>  CustomUseQuery('allUsers', api.user.findAll, options)
const findOne = (data, options) => CustomUseQuery('user', () => api.user.findOne(data), options)

// useMutation
const add = (options) => CustomUseMutation(api.user.add, {queryKey: "allUsers", ...options});
const deleteOne = (options) => CustomUseMutation(api.user.deleteOne, {queryKey: "user", ...options});

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


