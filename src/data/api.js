import axios from 'axios'

export const http = axios.create({
  baseURL: 'http://localhost:3001/',
  timeout: 1000,
  headers: {
    'Content-Type': 'application/json',
  },
})

export const api = {
  user: {
    findAll: async (data) => {
      new Promise((resolve) => {
        setTimeout(resolve, 5000)
      })
      return await http.get('/aluno/').then((resp) => resp.data)
    },
    add: async (data) =>
      await http.post('/aluno/', data).then((resp) => resp.data),
    findOne: async ({license}) => {
      return await http.get(`/user/${license}/ira`).then((resp) => resp.data)
    },
    deleteOne: async ({license}) =>
      await http.delete(`/aluno/${license}`).then((resp) => resp.data),
  },
  discipline: {
    findAll: async (data) =>
      await http.get('/disciplina/').then((resp) => resp.data),
    add: async (data) =>
      await http.post('/disciplina/', data).then((resp) => resp.data),
    deleteOne: async ({code}) =>
      await http.delete(`/disciplina/${code}`).then((resp) => resp.data),
  },
}
