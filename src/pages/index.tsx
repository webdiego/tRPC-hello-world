import React, { ChangeEvent } from 'react';
import type { NextPage } from 'next';
import { trpc } from '../utils/trpc';
import Select from 'components/Select';
import Input from 'components/Input';
import Button from 'components/Button';
import TextArea from 'components/TextArea';
import Message from 'components/Message';
import { Flags } from '@data/Flags';
import { Feel } from '@data/Feel';

const Home: NextPage = () => {
  //STATES
  const [name, setName] = React.useState<string>('Blackbeard');
  const [flag, setFlag] = React.useState<string>('🏴‍☠️');
  const [feeling, setFeeling] = React.useState<string>('😀');
  const [nationality, setNationality] = React.useState<string>('Pirates');
  const [msg, setMsg] = React.useState<string>('');
  //tRPC
  const { data, isLoading, isError, refetch } = trpc.useQuery(['getMsgs']);
  const mutation = trpc.useMutation(['add'], {
    onSuccess: () => {
      refetch();
    },
  });

  //FIXME:
  let allMsgs: any | undefined = data;

  if (isLoading) {
    return <div>Loading...</div>;
  }
  //  TODO: HANDLE ERROR
  if (isError) {
    return <div>Something wrong</div>;
  }

  const handleChangeFlag = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFlag(event.target.value.split(',')[0]);
    setNationality(event.target.value.split(',')[1]);
  };
  const handleChangeFeeling = (event: ChangeEvent<{ value: string }>) => {
    setFeeling(event?.target?.value.split(',')[0]);
  };
  const handleChangeMsg = (e: React.ChangeEvent<HTMLInputElement>) => {
    setMsg(e.target.value);
  };
  const handleChangeName = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  };
  //TODO: //FIXME: ADD TYPES
  const addMsg = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (msg !== '') {
      mutation.mutate({
        name: name,
        message: msg,
        flag: flag,
        feeling: feeling,
        nationality: nationality,
      });
      setName('Blackbeard');
      setFlag('🏴‍☠️');
      setFeeling('😀');
      setNationality('Pirates');
      setMsg('');
    } else {
      return;
    }
  };

  return (
    <>
      <div className="h-full flex item-center flex-col justify-center min-h-screen ">
        <div className="max-w-7xl px-10 md:px-0 md:mx-auto min-full flex-col flex items-center justify-center ">
          <div className="my-10 relative max-w-2xl flex flex-col items-center justify-center text-center">
            <p className=" absolute -top-2 left-0 font-semibold transform -rotate-[25deg] text-sm md:text-lg text-black">
              say
            </p>
            <h1 className="title">HELLO WORLD</h1>
          </div>

          <div className="max-w-7xl gap-2">
            <div className=" w-full flex flex-col items-start gap-2 justify-center md:items-end">
              <div className="w-full">
                <TextArea text="Message" msg={msg} onChange={handleChangeMsg} />
              </div>

              <form
                className="w-full flex flex-col items-center sm:items-end justify-center sm:space-x-4 "
                onSubmit={(e: React.FormEvent<HTMLFormElement>) => addMsg(e)}
              >
                <div className="w-full flex items-end justify-center space-x-4 ">
                  <Input onChange={handleChangeName} text="By" />
                  <Select data={Flags} onChange={handleChangeFlag} text="From" />
                  <Select data={Feel} onChange={handleChangeFeeling} text="Feel" />

                  <div className="hidden sm:block ">
                    <Button />
                  </div>
                </div>

                <div className="sm:hidden mt-5 w-full ">
                  <Button />
                </div>
              </form>
            </div>
          </div>

          <div>
            <>
              {mutation.error && (
                <p className="py-2 px-4 bg-white mt-6 text-xs rounded-md text-purple-600">
                  {mutation.error.message}
                </p>
              )}
              {mutation.data && <p className="mt-4"></p>}
              {/* {data?.ck === true && <p className="mt-4">nono</p>} */}
            </>
          </div>
        </div>
        {/* MESSAGES */}
        <div className="max-w-7xl mx-auto mt-5 ">
          <h1 className="text-sm text-black">Last messages:</h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 py-5 place-items-center  ">
            {allMsgs?.data &&
              [...allMsgs?.data]
                ?.reverse()
                .slice(0, 10)
                .map((el, i) => {
                  const { flag, message, name, feeling, createdAt, nationality } = el;
                  return (
                    <div key={i}>
                      <Message {...{ flag, message, name, feeling, createdAt, nationality }} />
                    </div>
                  );
                })}
          </div>
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
