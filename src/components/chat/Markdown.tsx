import React, { FC } from 'react';
import ReactMarkdown from 'react-markdown';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { atomDark } from 'react-syntax-highlighter/dist/esm/styles/prism';

interface MarkdownProps {
  markdownText?: string;
}

const Markdown: FC<MarkdownProps> = ({ markdownText }) => {
  return (
    <ReactMarkdown
      components={{
        code({ node, inline, className, children, ...props }: any) {
          const match = /language-(\w+)/.exec(className || 'language-js');
          return !inline ? (
            <SyntaxHighlighter
              {...props}
              style={atomDark}
              language={match ? match[1] : undefined}
              PreTag='div'
            >
              {String(children).replace(/\n$/, '')}
            </SyntaxHighlighter>
          ) : (
            <code {...props} className={className}>
              {children}
            </code>
          );
        },
      }}
    >
      {markdownText}
    </ReactMarkdown>
  );
};

export default Markdown;
