import * as trpc from '@trpc/server';
import { z } from 'zod';

const createRouter = () => {
  return trpc.router<Context>();
}
export const appRouter = trpc
  .router()
  .query('getMsgs', {
    input: z
      .object({
        text: z.string().nullish(),
      })
      .nullish(),
    resolve({ input }) {
      return {
        allMsgs: 'h',
      };
    },
  })
  .mutation('add', {
    input:z.object({
      text:z.string()
    }),
    async resolve({input}){
      return{
        text:input.text
      }
    }
  })

// export type definition of API
export type AppRouter = typeof appRouter;

