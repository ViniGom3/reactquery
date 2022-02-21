import {useQuery} from 'react-query'
import {api} from '.'
import {customUseMutation, defaultOptions} from './customConfigs'

// useQuerys
const findAll = ({
    queryKey = 'Alldiciplines',
    fetcher = api.user.findAll,
    options = defaultOptions,
  }) => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    return useQuery(queryKey, fetcher, options)
  }


const findOne = (license) =>
  ({
    queryKey = 'Dicipline',
    fetcher = () => api.discipline.findAll(license),
    options = defaultOptions,
  }) => {
    return useQuery(queryKey, fetcher, options)
  }


// useMutates
const add = () => customUseMutation(api.discipline.add, 'Alldiciplines')
const deleteOne = () =>  customUseMutation(api.discipline.deleteOne, 'Dicipline')

const discipline = {
  query: {
    findAll,
    findOne
  },
  mutation: {
      add,
      deleteOne,
  }
}

export default discipline
