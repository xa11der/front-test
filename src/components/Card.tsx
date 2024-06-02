import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import toast from 'react-hot-toast';
import Notification from './ui/Notification';
import { StyledCard, StyledImageContainer, StyledMutationButtons } from './styles/Card.styled';
import { PlayerWithId } from '../lib/types.type';

type CardProps = PlayerWithId & { setRevalidateCollection: React.Dispatch<React.SetStateAction<boolean>> };

const Card: React.FC<CardProps> = ({ firstname, lastname, birthday, image, id, setRevalidateCollection }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const history = useHistory();

  const handleImageLoading = () => {
    setIsLoading(true);
  };

  const handleImageError = () => {
    setIsError(true);
  };

  const handleEditCard = (id: number) => {
    history.push(`/edit-card/${id}`);
  };

  const handleDeleteCard = async (id: number) => {
    try {
      const response = await fetch(`${process.env.REACT_APP_API}/cards/${id}`, {
        method: 'DELETE',
        headers: { 'Content-Type': 'application/json' },
      });

      if (!response.ok) throw new Error("Card wasn't deleted. Try again later.");
      setRevalidateCollection(true);
      toast.success('You have successfully deleted a card.');
    } catch (error) {
      if (error instanceof Error) toast.error(error.message);
    }
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
          <StyledMutationButtons>
            <button onClick={() => handleEditCard(id)}>Edit</button>
            <button onClick={() => handleDeleteCard(id)}>Delete</button>
          </StyledMutationButtons>
        </StyledCard>
      )}
    </>
  );
};

export default Card;

