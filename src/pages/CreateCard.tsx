import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { StyledCreateCardForm, StyledFormTitle } from '../components/styles/CreateCardForm.styled';
import { PlayerType, playerSchema } from '../lib/types.type';

export const CreateCard: React.FC = () => {
  const [formError, setFormError] = useState('');

  const onSubmit = async (data: PlayerType) => {
    const playerData = {
      player: { ...data, birthday: new Date(data.birthday).toISOString() },
    };

    try {
      const response = await fetch(`${process.env.REACT_APP_API}/cards`, {
        method: 'POST',
        body: JSON.stringify(playerData),
        headers: { 'Content-Type': 'application/json' },
      });

      if (!response.ok) throw new Error("Card wasn't created. Try again later.");
    } catch (error) {
      if (error instanceof Error) return setFormError(error.message);
    }

    reset();
  };

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<PlayerType>({ resolver: zodResolver(playerSchema) });

  return (
    <StyledFormTitle>
      <h1>Create a Card</h1>
      <StyledCreateCardForm onSubmit={handleSubmit(onSubmit)}>
        <label htmlFor="firstname">First Name:</label>
        <input type="text" id="firstname" {...register('firstname')} />
        {errors.firstname && <p className="u-error-message-color">{errors.firstname.message}</p>}
        <label htmlFor="lastname">Last Name:</label>
        <input type="text" id="lastname" {...register('lastname')} />
        {errors.lastname && <p className="u-error-message-color">{errors.lastname.message}</p>}
        <label htmlFor="birthday">Birthday:</label>
        <input type="date" id="birthday" {...register('birthday')} />
        {errors.birthday && <p className="u-error-message-color">{errors.birthday.message}</p>}
        <label htmlFor="image">Image:</label>
        <input type="text" id="image" {...register('image')} />
        {errors.image && <p className="u-error-message-color">{errors.image.message}</p>}
        <button type="submit" disabled={isSubmitting}>
          Create
        </button>
        {formError && <p className="u-error-message-color">{formError}</p>}
      </StyledCreateCardForm>
    </StyledFormTitle>
  );
};

