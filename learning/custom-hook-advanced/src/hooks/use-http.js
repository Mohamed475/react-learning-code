import { useState } from 'react';
import { useCallback } from 'react';

const useHttp = (reqData) => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const sendRequest = useCallback(
    async (reqConfig) => {
      setIsLoading(true);
      setError(null);
      try {
        const response = await fetch(reqConfig.url, {
          method: reqConfig.method ? reqConfig.method : 'GET',
          headers: reqConfig.headers ? reqConfig.headers : {},
          body: JSON.stringify(reqConfig.body) ? reqConfig.body : null,
        });

        if (!response.ok) {
          throw new Error('Request failed!');
        }

        const data = await response.json();

        reqData(data);
      } catch (err) {
        setError(err.message || 'Something went wrong!');
      }
      setIsLoading(false);
    },
    [reqData]
  );

  return {
    isLoading,
    error,
    sendRequest,
  };
};

export default useHttp;
