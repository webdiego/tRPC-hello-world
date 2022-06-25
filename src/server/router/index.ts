import * as trpc from '@trpc/server';
import { z } from 'zod';
import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()


export const appRouter = trpc
  .router()
  .query('getMsgs', {
    async resolve() {
      const data = await prisma.people.findMany()
      if(!data) return []
      return data ;
    },
  })
  .mutation('add', {
    input: z.object({
      name: z.string(),
      message: z.string(),
      flag: z.string(),
      feeling:z.string()
    }),
    async resolve({ input }) {
      const {name,message, flag, feeling }= input
      const msg = await prisma.people.create({
        data: {
         name,
         message,
         flag: flag === ''? '🏴‍☠️':flag,
         feeling
        }
      })
      return msg ;
    },
  })

// export type definition of API
export type AppRouter = typeof appRouter;

