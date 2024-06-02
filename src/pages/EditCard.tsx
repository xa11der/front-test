import React from 'react';
import { useParams, useHistory } from 'react-router-dom';
import toast from 'react-hot-toast';
import CardForm from '../components/CardForm';
import Notification from '../components/ui/Notification';
import { IdPathParam, PlayerType, extendedPlayerSchema, pathParamSchema } from '../lib/types.type';
import { EMPTY_PLAYER_OBJECT } from '../lib/constants';

const EditCard: React.FC = () => {
  const { id } = useParams<IdPathParam>();
  const history = useHistory();

  const validatedId = pathParamSchema.safeParse({ id });
  if (!validatedId.success) return <Notification message="Page doesn't exist." />;

  const onSubmit = async (data: PlayerType) => {
    const playerData = {
      player: { ...data, birthday: new Date(data.birthday).toISOString() },
    };
    try {
      const response = await fetch(`${process.env.REACT_APP_API}/cards/${validatedId.data.id}`, {
        method: 'PUT',
        body: JSON.stringify(playerData),
        headers: { 'Content-Type': 'application/json' },
      });

      if (!response.ok) throw new Error("Card wasn't edited. Try again later.");
      history.push('/collection');
    } catch (error) {
      if (error instanceof Error) toast.error(error.message);
    }
  };

  const defaultValues = async () => {
    try {
      const response = await fetch(`${process.env.REACT_APP_API}/cards/${validatedId.data.id}`);
      if (!response.ok) return EMPTY_PLAYER_OBJECT;
      const data: unknown = await response.json();

      const validatedData = extendedPlayerSchema.safeParse(data);
      if (!validatedData.success) throw new Error();

      return {
        firstname: validatedData.data.player.firstname,
        lastname: validatedData.data.player.lastname,
        birthday: new Date(validatedData.data.player.birthday).toISOString().split('T')[0],
        image: validatedData.data.player.image,
      };
    } catch (error) {
      toast.error('Something went wrong.');
      return EMPTY_PLAYER_OBJECT;
    }
  };

  return <CardForm buttonText="Edit" onSubmit={onSubmit} title="Edit a Card" defaultValues={defaultValues} />;
};

export default EditCard;

