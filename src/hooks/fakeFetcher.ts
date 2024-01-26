import { useEffect, useState } from 'react';

export function useFakeFetch<Type>(val: unknown) {
  const [data, setData] = useState<Type | undefined>();
  const [error, setError] = useState<string | undefined>();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate an asynchronous data fetch
    const fetchData = async () => {
      try {
        const fetchedData = await new Promise(resolve => {
          // Simulate random loading delay between 500-1000ms
          const delay = Math.floor(Math.random() * (1000 - 500 + 1) + 500);
          setTimeout(() => resolve(val), delay);
        });

        setData(fetchedData as Type);
      } catch (error) {
        setError(error as string);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, [val]);

  return { data, error, isLoading };
}