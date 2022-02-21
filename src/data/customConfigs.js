import { useMutation, useQueryClient } from "react-query"

export const defaultOptions = {
  staleTime: 10000,
};

const useMutationOnSuccessDefault = (queryKey, result, variables, context) => {
  const queryClient = useQueryClient()
  queryClient.invalidateQueries(queryKey)
}

const useMutationOnErrorDefault = (err, variables, context) => {
  console.log(err)
}

export const customUseMutation = (fetcher, {queryKey, options, onSuccess = useMutationOnSuccessDefault, onError = useMutationOnErrorDefault}) => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  return useMutation(data => fetcher(data), {
    onSuccess,
    onError,
    ...options
  })
}




