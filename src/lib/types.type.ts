import { z } from 'zod';

export const playerSchema = z.object({
  firstname: z.string(),
  lastname: z.string(),
  birthday: z.string(),
  image: z.string().url(),
});

export const extendedPlayerSchema = z.object({
  id: z.number(),
  player: playerSchema,
});

export const arrayOfPlayersSchema = z.array(extendedPlayerSchema);

export type PlayerType = z.infer<typeof playerSchema>;

export type ExtendedPlayer = z.infer<typeof extendedPlayerSchema>;
