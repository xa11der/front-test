import { useEffect, useState } from 'react';
import { ExtendedPlayer, arrayOfPlayersSchema } from '../types.type';

export const useFetchCollection = (url: string) => {
  const [collectionData, setCollectionData] = useState<ExtendedPlayer[] | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  useEffect(() => {
    (async () => {
      setIsLoading(true);
      try {
        const response = await fetch(url); // i would use react-query in a real project
        if (!response.ok) throw new Error();
        const data: unknown = await response.json();

        const validatedData = arrayOfPlayersSchema.safeParse(data);
        if (!validatedData.success) throw new Error();

        setCollectionData(validatedData.data);
      } catch (error) {
        setErrorMessage('Something went wrong');
      }
      setIsLoading(false);
    })();
  }, [url]);

  return { collectionData, isLoading, errorMessage };
};

