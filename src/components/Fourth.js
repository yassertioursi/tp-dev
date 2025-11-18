

import React from 'react';
import { MessageContext } from './First';

function Fourth() {
  return (
    <MessageContext.Consumer>
      {message => (
        <div>The message from First is: <strong>{message}</strong></div>
      )}
    </MessageContext.Consumer>
  );
}

export default Fourth;
