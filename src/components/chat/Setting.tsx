"use client"

import React, { FC } from 'react';
import { checkApiKey } from 'utils/checkKeys';

interface SettingProps {
  modalOpen: boolean;
  setModalOpen: (open: boolean) => void;
}

const Setting: FC<SettingProps> = ({ modalOpen, setModalOpen }) => {
  const apiKey = window.localStorage.getItem('api-key') || '';
  const [loading, setLoading] = React.useState<boolean>(false);
  const [errorMsg, setErrorMsg] = React.useState<string>('');
  const [input, setInput] = React.useState<string>('');

  const saveKey = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setErrorMsg('');
    const keys = input;

    await checkApiKey(keys)
      .then(() => {
        window.localStorage.setItem('api-key', keys);
        console.log('works');
        setModalOpen(false);
      })
      .catch(() => {
        console.log('doesnt work');
        setErrorMsg('error: incorrect keys');
      });

    setLoading(false);
  };

  const removeApiKey = () => {
    window.localStorage.removeItem('api-key');
    setInput('');
  };

  React.useEffect(() => {
    if (modalOpen) {
      setInput(apiKey);
    }
  }, [apiKey, modalOpen]);

  return (
    <form
      onSubmit={saveKey}
      className='flex flex-col items-center justify-center gap-2 '>
      <p className='text-lg font-semibold'>Use your own API-key.</p>
      <p>keys are saved in your own browser</p>
      <p className='italic'>
        Get OpenAI API key{' '}
        <a
          className='text-blue-600'
          rel='noreferrer'
          target='_blank'
          href='https://platform.openai.com/account/api-keys'>
          here
        </a>
        .
      </p>
      <input
        value={input}
        onChange={(e) => setInput(e.target.value)}
        type='password'
        className='w-full max-w-xs input input-bordered border'
      />
      <button disabled={loading} className='w-full max-w-xs btn btn-outline'>
        {loading ? (
          <>
            <span className='loading loading-spinner' />
            <p>Checking Api Key</p>
          </>
        ) : (
          'save to localStorage'
        )}
      </button>
      {apiKey && input && (
        <span
          onClick={loading ? null : removeApiKey}
          className={`w-full max-w-xs btn btn-error ${loading ? 'disableClick' : ''}`}>
          remove keys
      </span>
      )}
      <p>{errorMsg}</p>
    </form>
  );
};

export default Setting;
