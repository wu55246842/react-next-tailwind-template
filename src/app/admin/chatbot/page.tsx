"use client"

import Message from 'components/chat/Message';
import { ChatContext } from 'contexts/chatContext';
import Thinking from 'components/chat/Thinking';
import { MdSend } from 'react-icons/md';
import { replaceProfanities } from 'no-profanity';
import { dalle } from 'utils/dalle'
import { davinci } from 'utils/davinci';  
import Modal from 'components/modal';
import Setting from 'components/chat/Setting';
import React from 'react';



const options = ['ChatGPT', 'DALL·E'];
const gptModel = ['gpt-3.5-turbo', 'gpt-4'];
const template = [
  {
    title: 'Plan a trip',
    prompt: 'I want to plan a trip to New York City.',
  },
  {
    title: 'how to make a cake',
    prompt: 'How to make a cake with chocolate and strawberries?',
  },
  {
    title: 'Business ideas',
    prompt: 'Generate 5 business ideas for a new startup company.',
  },
  {
    title: 'What is recursion?',
    prompt: 'What is recursion? show me an example in python.',
  },
];


const ChatBot = () => {

  const [formValue, setFormValue] = React.useState<string>('');

  const messagesEndRef = React.useRef(null);
  const inputRef = React.useRef(null);
  const [thinking, setThinking] = React.useState(false);
  const [selected, setSelected] = React.useState(options[0]);
  const [gpt, setGpt] = React.useState(gptModel[0]);
  const chatContext = React.useContext(ChatContext);

  if (!chatContext) {
    console.log("----->")
  }

  // const { messages, addMessage } = chatContext;
  const [messages, setMessages ] = React.useState<MessageProps[]>([]);
  const [modalOpen, setModalOpen] = React.useState(false);


  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };


  const updateMessage = (newValue: string, ai = false, selected: string) => {
    const id = Date.now() + Math.floor(Math.random() * 1000000);
    const newMsg: MessageProps = {
      id,
      createdAt: Date.now(),
      text: newValue,
      ai,
      selected
    };
    setMessages((prevMessages) => [...prevMessages, newMsg]);
  };

  const sendMessage = async (e: React.FormEvent) => {
    e.preventDefault();

    const key = window.localStorage.getItem('api-key');
    if (!key) {
      setModalOpen(true);
      return;
    }

    const cleanPrompt = replaceProfanities(formValue);

    const newMsg = cleanPrompt;
    const aiModel = selected;
    const gptVersion = gpt;

    // ... remaining logic in the function remains same

    try {
      if (aiModel === options[0]) {
        const LLMresponse = await davinci(cleanPrompt, key, gptVersion);
        LLMresponse && updateMessage(LLMresponse, true, aiModel);
      } else {
        const response = await dalle(cleanPrompt, key);
        const data = response.data.data[0].url;
        data && updateMessage(data, true, aiModel);
      }
    } catch (err) {
      window.alert(`Error: ${err} please try again later`);
    }

    setThinking(false);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      sendMessage(e as any); // Cast e to 'any' to bypass type error
    }
  };

  React.useEffect(() => {
    scrollToBottom();
  }, [messages, thinking]);

  /**
   * Focuses the TextArea input to when the component is first rendered.
   */
  React.useEffect(() => {
    inputRef.current.focus();
  }, []);

  return (
    <main className='relative flex flex-col h-screen p-1 overflow-hidden dark:bg-light-grey'>
      <div className='mx-auto my-4 tabs tabs-boxed w-fit'>
        <a
          onClick={() => setGpt(gptModel[0])}
          className={`${gpt == gptModel[0] && 'tab-active'} tab`}>
          GPT-3.5
        </a>
        <a
          onClick={() => setGpt(gptModel[1])}
          className={`${gpt == gptModel[1] && 'tab-active'} tab`}>
          GPT-4
        </a>
      </div>

      <section className='flex flex-col flex-grow w-full px-4 overflow-y-scroll sm:px-10 md:px-32'>
        {messages?.length ? (
          messages.map((message, index) => (
            <Message key={index} message={{ ...message }} />
          ))
        ) : (
          <div className='flex my-2'>
            <div className='w-screen overflow-hidden'>
              <ul className='grid grid-cols-2 gap-2 mx-10'>
                {template.map((item, index) => (
                  <li
                    onClick={() => setFormValue(item.prompt)}
                    key={index}
                    className='p-6 border rounded-lg border-slate-300 hover:border-slate-500'>
                    <p className='text-base font-semibold dark:text-white text-gray-900'>{item.title}</p>
                    <p className='text-sm dark:text-white text-gray-900'>{item.prompt}</p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        )}

        {thinking && <Thinking />}

        <span ref={messagesEndRef}></span>
      </section>
      <form
        className='flex flex-col px-10 mb-2 md:px-32 join sm:flex-row'
        onSubmit={sendMessage}>
        <select
          value={selected}
          onChange={(e) => setSelected(e.target.value)}
          className='w-full sm:w-40 select select-bordered join-item'>
          <option>{options[0]}</option>
          <option>{options[1]}</option>
        </select>
        <div className='flex items-stretch justify-between w-full'>
          <textarea
            ref={inputRef}
            className='w-full grow input input-bordered join-item max-h-[20rem] min-h-[3rem]'
            value={formValue}
            onKeyDown={handleKeyDown}
            onChange={(e) => setFormValue(e.target.value)}
          />
          <button type='submit' className='join-item btn' disabled={!formValue}>
            <MdSend size={30} />
          </button>
        </div>
      </form>
      <Modal title='Setting' modalOpen={modalOpen} setModalOpen={setModalOpen}>
        <Setting modalOpen={modalOpen} setModalOpen={setModalOpen} />
      </Modal>
    </main>
  );
};

export default ChatBot;
