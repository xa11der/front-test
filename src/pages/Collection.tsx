import React, { useState } from 'react';
import { StyledCard, StyledImageContainer } from '../components/styles/Card.styled';
import Loader from '../components/ui/Loader';
import { calculateBirthday } from '../lib/utils';
import { fetchCollection } from '../lib/collection';

export const Collection: React.FC = () => {
  const collection = fetchCollection();
  const card = collection[0];

  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  const handleImageLoading = () => {
    setIsLoading(true);
  };

  const handleImageError = () => {
    setIsError(true);
  };

  return (
    <>
      {!isError && (
        <StyledCard>
          <StyledImageContainer>
            {!isLoading && <Loader />}
            <img
              src={`${process.env.REACT_APP_IMAGE_RESOURCES}/image_resources/playerimages/${card.id}.png`}
              alt={`${card.player.firstname} ${card.player.lastname}`}
              width="100%"
              height="100%"
              loading="lazy"
              onLoad={handleImageLoading}
              onError={handleImageError}
            />
          </StyledImageContainer>
          <p>{calculateBirthday(card.player.birthday)}</p>
          <p>{`${card.player.firstname} ${card.player.lastname}`}</p>
        </StyledCard>
      )}
    </>
  );
};

