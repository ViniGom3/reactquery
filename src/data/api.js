import axios from 'axios'

export const http = axios.create({
  baseURL: 'http://localhost:3001/',
  timeout: 10000, 
  headers: { 'X-Custom-Header': 'foobar' },
})


export const api = {
  user: {
    findAll: async (data) => {
      return await http.get('/aluno/').then((resp) => resp.data)
    },
    add: async (data) => {
      const matricula = data.matricula
      return await http.post('/aluno', {matricula}).then((resp) => resp.data)},
    findOne: async ({license}) => {
      return await http.get(`/user/${license}/ira`).then((resp) => resp.data)
    },
    deleteOne: async ({matricula}) =>
      await http.delete(`/aluno/${matricula}`).then((resp) => resp.data),
  },
  discipline: {
    findAll: async (data) =>
      await http.get('/disciplina/').then((resp) => resp.data),
    add: async (data) =>
      await http.post('/disciplina/', data).then((resp) => resp.data),
    deleteOne: async ({codigo}) =>
      await http.delete(`/disciplina/${codigo}`).then((resp) => resp.data),
  },
}
