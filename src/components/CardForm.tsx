import React from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { StyledCreateCardForm, StyledFormTitle } from './styles/CreateCardForm.styled';
import { PlayerType, playerSchema } from '../lib/types.type';

type CardFormProps = {
  onSubmit: (data: PlayerType) => Promise<void>;
  title: string;
  buttonText: string;
  defaultValues: () => Promise<{
    firstname: string;
    lastname: string;
    birthday: string;
    image: string;
  }>;
};

const CardForm: React.FC<CardFormProps> = ({ onSubmit, buttonText, title, defaultValues }) => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<PlayerType>({
    resolver: zodResolver(playerSchema),
    defaultValues: defaultValues,
  });

  return (
    <StyledFormTitle>
      <h1>{title}</h1>
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
          {buttonText}
        </button>
      </StyledCreateCardForm>
    </StyledFormTitle>
  );
};

export default CardForm;

