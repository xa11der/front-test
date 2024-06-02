import React from 'react';
import { useHistory } from 'react-router-dom';
import toast from 'react-hot-toast';
import CardForm from '../components/CardForm';
import { PlayerType } from '../lib/types.type';
import { EMPTY_PLAYER_OBJECT } from '../lib/constants';

const CreateCard: React.FC = () => {
  const history = useHistory();

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
      history.push('/collection');
    } catch (error) {
      if (error instanceof Error) toast.error(error.message);
    }
  };

  return <CardForm onSubmit={onSubmit} buttonText='Create' title='Create a Card' defaultValues={async() => EMPTY_PLAYER_OBJECT} />;
};

export default CreateCard;
