
import React from 'react';
import Second from './Second';

export const MessageContext = React.createContext();

function First() {
  const message = "Hello from First!";
  return (
    <MessageContext.Provider value={message}>
      <Second />
    </MessageContext.Provider>
  );
}

export default First;
