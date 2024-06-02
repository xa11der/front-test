import { z } from 'zod';

export const playerSchema = z.object({
  firstname: z.string().min(2, 'Please enter valid First Name'),
  lastname: z.string().min(2, 'Please enter valid Last Name'),
  birthday: z.string().min(10, 'Please enter valid date'),
  image: z.string().url('Please enter valid url to image'),
});

export const extendedPlayerSchema = z.object({
  id: z.number(),
  player: playerSchema,
});

export const arrayOfPlayersSchema = z.array(extendedPlayerSchema);

export const searchParamSchema = z.object({
  sort: z.enum(['firstname', 'lastname', 'birthday']),
  direction: z.enum(['asc', 'desc']),
});

export type PlayerType = z.infer<typeof playerSchema>;

export type ExtendedPlayer = z.infer<typeof extendedPlayerSchema>;

