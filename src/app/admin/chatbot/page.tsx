'use client';
import type { AppProps } from 'next/app';
import { ChakraProvider, Box, Portal, useDisclosure } from '@chakra-ui/react';
import { getActiveRoute, getActiveNavbar } from 'utils/navigation';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import 'styles/App.css';
import 'styles/Contact.css';
import 'styles/Plugins.css';
import 'styles/MiniCalendar.css';
import Navbar from 'components/navbar';

function ChatBot({ Component, pageProps }: AppProps<{}>) {
  const pathname = usePathname();
  const [apiKey, setApiKey] = useState('');
  const { isOpen, onOpen, onClose } = useDisclosure();
  useEffect(() => {
    const initialKey = localStorage.getItem('apiKey');
    if (initialKey?.includes('sk-') && apiKey !== initialKey) {
      setApiKey(initialKey);
    }
  }, [apiKey]);

  return (
    <ChakraProvider>
      <Box>
 
          <Box
            mx="auto"
            p={{ base: '20px', md: '30px' }}
            pe="20px"
            minH="100vh"
            pt="50px"
          >
            <Component apiKeyApp={apiKey} {...pageProps} />
          </Box>
      </Box>
    </ChakraProvider>
  );
}

export default ChatBot;
