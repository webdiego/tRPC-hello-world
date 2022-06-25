import React, { ChangeEvent } from 'react';
import type { NextPage } from 'next';
import { trpc } from '../utils/trpc';
import Select from 'components/Select';
import Input from 'components/Input';
import Button from 'components/Button';
// import { useRouter } from 'next/router';
// import { GetServerSideProps } from 'next';
// import LastMsgs from 'components/LastMsgs';
import Message from 'components/Message';
import { Flags } from '@data/Flags';
import { Feel } from '@data/Feel';

const Home: NextPage = () => {
  //STATES
  const [name, setName] = React.useState<string>('');
  const [flag, setFlag] = React.useState<string>('🏴‍☠️');
  const [feeling, setFeeling] = React.useState<string>('');

  // const [nationality, setNationality] = React.useState<string>('🏴‍☠️');
  const [msg, setMsg] = React.useState<string>('');

  //tRPC
  const { data: allMsgs, isLoading, refetch } = trpc.useQuery(['getMsgs']);
  // const as = trpc.useQuery(['getMsgs']);
  const mutation = trpc.useMutation(['add'], {
    onSuccess: () => {
      refetch();
    },
  });

  if (isLoading) {
    return <div>Loading...</div>;
  }

  const handleChangeFlag = (event: ChangeEvent<{ value: string }>) => {
    setFlag(event?.target?.value);
  };
  const handleChangeFeeling = (event: ChangeEvent<{ value: string }>) => {
    setFeeling(event?.target?.value);
  };
  const handleChangeText = (e: React.ChangeEvent<HTMLInputElement>) => {
    setMsg(e.target.value);
  };

  const addMsg = () => {
    mutation.mutate({ name: name, message: msg, flag: flag, feeling: feeling });
  };

  const handleChangeName = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  };
  // console.log(as);
  return (
    <>
      <div className="h-full">
        <div className="max-w-lg px-10 md:px-0 md:mx-auto min-h-[70vh] flex-col flex items-center justify-center">
          <div className="flex flex-col  items-center justify-center  text-center">
            <h1 className=" self-start font-semibold transform -rotate-[25deg] text-lg text-black">
              say
            </h1>
            <h1 className="text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-cyan-600 to-[#ff0080] mb-5">
              HELLO WORLD
            </h1>
          </div>
          <div className="w-full  gap-2">
            <div className="w-full flex flex-col md:flex-row items-start gap-2 justify-center md:items-end">
              <Input onChange={handleChangeText} text="Message" />
              <Input onChange={handleChangeName} text="By" />
              <Select data={Flags} onChange={handleChangeFlag} text="From" />
              <Select data={Feel} onChange={handleChangeFeeling} text="Feel" />
            </div>
            <div className=" mt-2">
              <Button onClick={addMsg} />
            </div>
          </div>

          <div>
            <>
              {mutation.error && <p>Something went wrong! {mutation.error.message}</p>}
              {mutation.data && <p className="mt-4"></p>}
            </>
          </div>
        </div>
        {/* MESSAGES */}
        <div className=" min-h-[30vh] flex w-full gap-6 flex-wrap justify-center px-10 pb-5">
          {allMsgs &&
            allMsgs?.map((el, i) => {
              const { flag, message, name } = el;
              return (
                <div key={i}>
                  <Message {...{ flag, message, name }} />
                </div>
              );
            })}
        </div>
      </div>
    </>
  );
};

export default Home;

// export const getServerSideProps: GetServerSideProps = async (ctx) => {
//   console.log(ctx);
//   let data = 'st';
//   // const allMsgs = trpc.useQuery(['getMsgs']);
//   // console.log(allMsgs);
//   return { props: { data: data } };
// };
