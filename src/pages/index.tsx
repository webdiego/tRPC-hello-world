import React from 'react'
import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import { trpc } from '../utils/trpc';

const Home: NextPage = () => {
   const [msg,setMsg]=React.useState('')
  // const {data , isLoading}= trpc.useQuery(['hello', { text: 'st' }]);
   const allMgs= trpc.useQuery(['getMsgs']);
   const mutation = trpc.useMutation(['add']);

  if ( allMgs.isLoading) {
    return <div>Loading...</div>;
  }

console.log(msg)
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head> 
      
      <div className='w-full min-h-screen flex-col flex items-center justify-center'> 
        <h1 className="text-2xl font-bold ">{allMgs.data.allMgs}</h1>
        <div className='flex space-x-5'>
          <input 
          className='border-2 rounded-lg px-2 py-2 text-2xl' 
          onChange={(e)=> setMsg(e.target.value)}>
          </input>
          <button onClick={ (e)=> mutation.mutate({text:msg })}>add</button>
        </div>
        <div>
        {mutation.error && <p>Something went wrong! {mutation.error.message}</p>}
        {mutation.data && <p className='mt-4'>{mutation.data.text}</p>}
         </div>
     </div>
    </div>
  )
}

export default Home
