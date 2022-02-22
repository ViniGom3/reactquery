import axios from 'axios'

export const http = axios.create({
  baseURL: 'http://localhost:3001/',
  timeout: 10000, 
  headers: { 'Content-Type': 'application/json' },
})

const user = {}
const discipline = {}

user.findAll = async (data) => await http.get('/aluno/').then((resp) => resp.data)
user.add = async (data) => await http.post('/aluno', data).then((resp) => resp.data)
user.findOne = async ({license}) => await http.get(`/user/${license}/ira`).then((resp) => resp.data)
user.deleteOne = async ({matricula}) => await http.delete(`/aluno/${matricula}`).then((resp) => resp.data)

discipline.findAll = async (data) => await http.get('/disciplina/').then((resp) => resp.data)
discipline.add =  async (data) => await http.post('/disciplina/', data).then((resp) => resp.data)
discipline.deleteOne = async ({codigo}) =>  await http.delete(`/disciplina/${codigo}`).then((resp) => resp.data)


export const api = {
  user,  
  discipline,   
}
