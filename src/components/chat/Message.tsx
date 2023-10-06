import React, { FC } from 'react';
import { MdComputer, MdPerson } from 'react-icons/md';
import moment from 'moment';
import Image from './Image';
import Markdown from './Markdown';

interface MessageProps {
  message: {
    id: number;
    createdAt: number;
    text: string;
    ai?: boolean;
    selected?: string;
  };
}

const Message: FC<MessageProps> = ({ message }) => {
  const { id, createdAt, text, ai = false, selected } = message;

  return (
    <div
      key={id}
      className={`flex items-end my-4 gap-3 ${ai ? 'flex-row-reverse' : ''}`}
    >
      {selected === 'DALL·E' && ai ? (
        <Image url={text} className='w-full rounded-lg shadow-lg'/>
      ) : (
        <div className={`w-full max-w-[70%] ${ai ? 'text-right' : 'text-left'}`}>
          <div className={`p-3 rounded-lg ${ai ? 'dark:bg-gray-500 text-gray-900' : 'bg-gray-100 text-gray-700'}`}>
            <Markdown markdownText={text} />
            <p className='text-xs mt-2'>
              {moment(createdAt).calendar()}
            </p>
          </div>
        </div>
      )}

      <div className='flex-shrink-0'>
        <div className='w-10 h-10 border rounded-full border-gray-400 flex items-center justify-center'>
          {ai ? (
            <MdComputer className='w-6 h-6 text-blue-500' />
          ) : (
            <MdPerson className='w-6 h-6 text-gray-500' />
          )}
        </div>
      </div>
    </div>
  );
};

export default Message;
