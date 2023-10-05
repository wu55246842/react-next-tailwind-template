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
      className={`flex items-end my-2 gap-2 ${ai ? 'flex-row-reverse justify-end' : 'flex-row justify-start'}`}
    >
      {selected === 'DALL·E' && ai ? (
        <Image url={text} />
      ) : (
        <div className={`w-full overflow-hidden chat ${ai ? 'chat-start' : 'chat-end'}`}>
          <div className='chat-bubble text-neutral-content p-4 rounded-lg bg-gray-100'>
            <Markdown markdownText={text} />
            <div className={`${ai ? 'text-left' : 'text-right'} text-xs mt-2`}>
              {moment(createdAt).calendar()}
            </div>
          </div>
        </div>
      )}

      <div className='avatar'>
        <div className='w-8 h-8 border rounded-full border-gray-400 flex items-center justify-center'>
          {ai ? (
            <MdComputer className='w-6 h-6' />
          ) : (
            <MdPerson className='w-6 h-6' />
          )}
        </div>
      </div>
    </div>
  );
};

export default Message;
