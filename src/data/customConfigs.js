import { useMutation, useQueryClient} from "react-query";

export const defaultOptions = {
  staleTime: 10000,
};

export const CustomUseMutation = (
  fetcher,
  customOptions,  
) => { 
  const queryClient = useQueryClient();

  const useMutationOnSuccessDefault = (queryKey) => {   
    queryClient.invalidateQueries(queryKey);
  };

  const onSuccess = customOptions.onSuccess || useMutationOnSuccessDefault 
  return useMutation((data) => fetcher(data), {      
    ...customOptions,
    onSuccess,
  });
};
