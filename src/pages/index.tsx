import React, { ChangeEvent } from 'react';
import type { NextPage } from 'next';
import { trpc } from '../utils/trpc';
import Select from 'components/Select';
import Input from 'components/Input';
import Button from 'components/Button';

const Home: NextPage = () => {
  const [name, setName] = React.useState<string>('');
  const [flag, setFlag] = React.useState<string>('');
  const [msg, setMsg] = React.useState<string>('');

  const allMsgs = trpc.useQuery(['getMsgs']);
  const mutation = trpc.useMutation(['add']);

  if (allMsgs.isLoading) {
    return <div>Loading...</div>;
  }

  const handleChangeFlag = (event: ChangeEvent<{ value: string }>) => {
    setFlag(event?.target?.value);
  };
  const handleChangeText = (e: React.ChangeEvent<HTMLInputElement>) => {
    setMsg(e.target.value);
  };

  const addMsg = () => mutation.mutate({ name: name, message: msg, flag: flag });

  const handleChangeName = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  };
  console.log(allMsgs);
  return (
    <>
      <div className="h-full">
        <div className="max-w-lg mx-auto px-10 min-h-[70vh] flex-col flex items-center justify-center">
          <h1 className="self-start font-semibold transform -rotate-[25deg] text-lg text-black">
            say
          </h1>
          <h1 className="text-center text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-cyan-600 to-[#ff0080] mb-5">
            HELLO WORLD
          </h1>

          <div className="flex space-x-5">
            <Select onChange={handleChangeFlag} />
            <Input onChange={handleChangeName} />
            <Input onChange={handleChangeText} />
            <Button onClick={addMsg} />
          </div>

          <div>
            <>
              {mutation.error && <p>Something went wrong! {mutation.error.message}</p>}
              {mutation.data && <p className="mt-4"></p>}
            </>
          </div>
        </div>
        {/* MESSAGES */}
        <div className=" min-h-[30vh] flex ">
          {allMsgs.data &&
            allMsgs.data?.map((el, i) => {
              return (
                <div key={i} className="flex bg-red-100 h-full p-2">
                  <h1 className="text-4xl mr-4">{el.flag}</h1>
                  <div className="msg">
                    <h1>{el.message}</h1>
                    <h1>From: {el.name}</h1>
                  </div>
                </div>
              );
            })}
        </div>
      </div>
    </>
  );
};

export default Home;
