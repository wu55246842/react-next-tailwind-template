import React, { createContext, ReactNode, useContext, FC } from 'react';
import useMessageCollection from 'hooks/useMessageCollection';

interface ChatContextProps {
  messages: MessageProps[]; // Whatever the type of your messages is
  addMessage: (newMsg: MessageProps) => void; // Whatever the signature of addMessage is
  clearChat: () => void; // If you have this function
}

const ChatContext = createContext<ChatContextProps | undefined>(undefined);

const ChatContextProvider: FC<{children: ReactNode}> = ({ children }) => {
  const { messages, addMessage, clearChat } = useMessageCollection();

  return (
    <ChatContext.Provider value={{ messages, addMessage, clearChat }}>
      {children}
    </ChatContext.Provider>
  );
};

export { ChatContext, ChatContextProvider };
