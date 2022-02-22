import { useQuery, useMutation, useQueryClient } from "react-query";

export const defaultOptions = {
  staleTime: 3000,
};

export const CustomUseMutation = (fetcher, customOptions) => {
  const queryClient = useQueryClient();

  const useMutationOnSuccessDefault = (queryKey) => {
    queryClient.invalidateQueries(queryKey);
  };

  const onSuccess = customOptions.onSuccess || useMutationOnSuccessDefault;
  return useMutation((data) => fetcher(data), {
    ...customOptions,
    onSuccess,
  });
};

export const CustomUseQuery = (queryKey, fetcher, customOptions = {}) => {
  return useQuery(queryKey, fetcher, { ...defaultOptions, ...customOptions });
};
