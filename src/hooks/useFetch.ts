/* eslint-disable @typescript-eslint/no-explicit-any */
import { useCallback, useEffect, useState } from 'react';

import axiosInstance from '../services/axiosInstance';

export interface FetchOptions {
  requestData?: any,
  method?: 'GET' | 'POST' | 'PUT' | 'DELETE' | 'PATCH',
  immediate?: boolean
}

function useFetch<Type>(url: string, options: FetchOptions = {}) {
  const { requestData, method = 'GET', immediate = true } = options;

  const [data, setData] = useState<Type | null>();
  const [error, setError] = useState<any>();
  const [isLoading, setIsLoading] = useState(true);

  const execute = useCallback(() => {
    setIsLoading(true);
    
    let promise;

    switch (method) {
      case 'GET': {
        promise = axiosInstance.get(url);
        break;
      }
      case 'POST': {
        promise = axiosInstance.post(url, requestData);
        break;
      }
      case 'PUT': {
        promise = axiosInstance.put(url, requestData);
        break;
      }
      case 'DELETE': {
        promise = axiosInstance.delete(url);
        break;
      }
      case 'PATCH': {
        promise = axiosInstance.patch(url, requestData);
        break;
      }
    }

    return promise?.then((response) => {
      if (response.status == 200) {
        setData(response.data);
      } else {
        if (response.data.message) {
          setError(response.data.message);
        } else {
          setError('Unknown error');
        }
      }
      setIsLoading(false);
    }).catch((err) => {
      // console.log(error);
      setIsLoading(false);
      setError(err);
    });
  }, [method, requestData, url]);

  useEffect(() => {
    if (immediate) {
      execute();
    }
  }, [execute, immediate]);

  return { data, error, isLoading, execute };
}

export default useFetch;