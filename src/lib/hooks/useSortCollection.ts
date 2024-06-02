import { useEffect, useMemo, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { ExtendedPlayer, searchParamSchema } from '../types.type';

type SortCollectionProps = {
  collectionData: ExtendedPlayer[] | null;
};

export const useSortCollection = ({ collectionData }: SortCollectionProps) => {
  const [sortedCollection, setSortedCollection] = useState<ExtendedPlayer[] | null>(collectionData);

  useEffect(() => {
    setSortedCollection(collectionData);
  }, [collectionData]);

  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const searchParamsObject = Object.fromEntries(searchParams);
  const validatedSearchParams = searchParamSchema.safeParse(searchParamsObject);

  const sort = validatedSearchParams.data?.sort;
  const direction = validatedSearchParams.data?.direction;

  useMemo(() => {
    if (!sort || !direction || !sortedCollection) return;

    const sorted = sortedCollection.toSorted((a, b) => {
      if (direction === 'asc') {
        return a.player[sort] < b.player[sort] ? -1 : 1;
      } else {
        return a.player[sort] > b.player[sort] ? -1 : 1;
      }
    });
    setSortedCollection(sorted);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [sort, direction]);

  return { sortedCollection };
};

