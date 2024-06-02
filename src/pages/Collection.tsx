import React from 'react';
import Card from '../components/Card';
import NotificationWrapper from '../components/ui/NotificationWrapper';
import Notification from '../components/ui/Notification';
import Sorting from '../components/Sorting';
import { StyledCollectionGrid } from '../components/styles/CollectionGrid.styled';
import { useFetchCollection } from '../lib/hooks/useFetchCollection';
import { useSortCollection } from '../lib/hooks/useSortCollection';
import { calculateBirthday } from '../lib/utils';

export const Collection: React.FC = () => {
  const { collectionData, isLoading, errorMessage } = useFetchCollection(`${process.env.REACT_APP_API}/cards`);
  const { sortedCollection } = useSortCollection({
    collectionData: collectionData,
  });

  if (isLoading)
    return (
      <NotificationWrapper>
        <Notification message="Loading..." />
      </NotificationWrapper>
    );

  if (errorMessage)
    return (
      <NotificationWrapper>
        <Notification message={errorMessage} />
      </NotificationWrapper>
    );

  if (sortedCollection?.length === 0)
    return (
      <NotificationWrapper>
        <Notification message="There is no data for provided query." />
      </NotificationWrapper>
    );

  return (
    <>
      <Sorting />
      <StyledCollectionGrid>
        {sortedCollection?.map((card) => (
          <Card
            key={card.id}
            birthday={calculateBirthday(card.player.birthday) || ''}
            firstname={card.player.firstname}
            lastname={card.player.lastname}
            image={`${process.env.REACT_APP_IMAGE_RESOURCES}/image_resources/playerimages/${card?.id}.png`}
          />
        ))}
      </StyledCollectionGrid>
    </>
  );
};

