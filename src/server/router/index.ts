import * as trpc from '@trpc/server';
import { z } from 'zod';
import { PrismaClient } from '@prisma/client'
import { setCookie, getCookie } from 'cookies-next';
import {Context} from './createContext'
const prisma = new PrismaClient()


export const appRouter = trpc
  .router<Context>()
  .query('getMsgs', {
    async resolve({ctx}) {
      let {res,req} = ctx
      let ck = getCookie('sent',{ res,req }) || false
     
      
      console.log(ck)
      const data = await prisma.people.findMany()
      if(!data) return []
     
      return {data,ck};
    },
  })
  .mutation('add', {
    input: z.object({
      name: z.string(),
      message: z.string(),
      flag: z.string(),
      feeling:z.string(),
      nationality: z.string()
    }),
    async resolve({ ctx, input }) {
      let {res,req} = ctx
      let ck = getCookie('sent',{ res,req })
      if(ck){
      throw new trpc.TRPCError({
        code:'BAD_REQUEST',
        message:'😏 You already sent a message!'
      })
      }
      if(!ck){

        setCookie('sent',true,{ req, res, maxAge: 60 * 6 * 24 })
  
        const {name,message, flag, feeling, nationality }= input
        const msg = await prisma.people.create({
          data: {
           name,
           message,
           flag: flag === ''? '🏴‍☠️':flag,
           feeling,
           nationality
          }
        })
        return msg ;
      }
      
    },
  })

// export type definition of API
export type AppRouter = typeof appRouter;

