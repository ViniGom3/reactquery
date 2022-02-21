import { useMutation, useQueryClient } from "react-query";

export const defaultOptions = {
  staleTime: 10000,
};

const useMutationOnSuccessDefault = (queryKey) => {
  const queryClient = useQueryClient();
  queryClient.invalidateQueries(queryKey);
};

const useMutationOnErrorDefault = (err) => {
  // FUNÇÃO QUALQUER DE LOGGING
  console.log(err);
};

export const customUseMutation = (
  fetcher,
  {
    queryKey,
    options,
    onSuccess = useMutationOnSuccessDefault,
    onError = useMutationOnErrorDefault,
  }
) => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  return useMutation((data) => fetcher(data), {
    onSuccess: () => onSuccess(queryKey),
    onError,
    ...options,
  });
};
