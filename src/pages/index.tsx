import React, { ChangeEvent } from 'react';
import type { NextPage } from 'next';
import { trpc } from '../utils/trpc';
import Select from 'components/Select';
import Input from 'components/Input';
import Button from 'components/Button';
import TextArea from 'components/TextArea';
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
  const handleChangeMsg = (e: React.ChangeEvent<HTMLInputElement>, msg: string) => {
    if (msg.length <= 10) setMsg(e.target.value);
    else msg.substring(0, 10);
  };
  const handleChangeName = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  };
  const addMsg = () => {
    mutation.mutate({ name: name, message: msg, flag: flag, feeling: feeling });
  };
  console.log(allMsgs);
  // console.log(as);
  return (
    <>
      <div className="h-full">
        <div className="max-w-2xl px-10 md:px-0 md:mx-auto min-h-[70vh] flex-col flex items-center justify-center">
          <div className=" max-w-2xl flex flex-col  items-center justify-center  text-center">
            <h1 className=" self-start font-semibold transform -rotate-[25deg] text-lg text-black">
              say
            </h1>
            <h1 className="relative font-ka text-[90px] text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-cyan-600 to-[#ff0080] mb-5">
              HELLO WORLD
            </h1>
          </div>
          <div className="w-full  gap-2 max-w-lg">
            <div className="w-full flex flex-col  items-start gap-2 justify-center md:items-end">
              <div className="w-full">
                <TextArea
                  text="Message"
                  msg={msg}
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleChangeMsg(e, msg)}
                />
              </div>

              <div className="w-full flex items-end justify-center space-x-4">
                <Input onChange={handleChangeName} text="By" />
                <Select data={Flags} onChange={handleChangeFlag} text="From" />
                <Select data={Feel} onChange={handleChangeFeeling} text="Feel" />
                <Button onClick={addMsg} />
              </div>
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
        <div className=" min-h-[30vh] flex w-full gap-6 flex-wrap justify-center px-10 pb-5 ">
          {allMsgs &&
            allMsgs?.slice(0, 10).map((el, i) => {
              const { flag, message, name, feeling } = el;
              return (
                <div key={i}>
                  <Message {...{ flag, message, name, feeling }} />
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
