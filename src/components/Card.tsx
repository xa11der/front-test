import React, { useState } from 'react';
import Notification from './ui/Notification';
import { StyledCard, StyledImageContainer } from './styles/Card.styled';
import { PlayerType } from '../lib/types.type';

const Card: React.FC<PlayerType> = ({ firstname, lastname, birthday, image }) => {
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
            {!isLoading && <Notification message="Loading..." />}
            <img
              src={image}
              alt={`${firstname} ${lastname}`}
              width="100%"
              height="100%"
              loading="lazy"
              onLoad={handleImageLoading}
              onError={handleImageError}
            />
          </StyledImageContainer>
          <p>{birthday}</p>
          <p>{`${firstname} ${lastname}`}</p>
        </StyledCard>
      )}
    </>
  );
};

export default Card;

