import React from 'react';
import Card from '../components/Card';
import NotificationWrapper from '../components/ui/NotificationWrapper';
import Notification from '../components/ui/Notification';
import { useFetchCollection } from '../lib/hooks/useFetchCollection';
import { calculateBirthday } from '../lib/utils';

export const Collection: React.FC = () => {
  const { collectionData, isLoading, errorMessage } = useFetchCollection(`${process.env.REACT_APP_API}/cards`);
  const card = collectionData?.[0];

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

  return (
    <Card
      birthday={calculateBirthday(card?.player.birthday) || ''}
      firstname={card?.player.firstname || ''}
      lastname={card?.player.lastname || ''}
      image={`${process.env.REACT_APP_IMAGE_RESOURCES}/image_resources/playerimages/${card?.id}.png` || ''}
    />
  );
};

