import React, { useId, useState } from 'react';

function UserForm() {
  const nameId = useId();
  const emailId = useId();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  return (
    <form style={{ maxWidth: 400, margin: '24px auto', padding: 16, border: '1px solid #ccc', borderRadius: 8 }}>
      <div style={{ marginBottom: 12 }}>
        <label htmlFor={nameId} style={{ display: 'block', marginBottom: 4 }}>Name:</label>
        <input
          id={nameId}
          type="text"
          value={name}
          onChange={e => setName(e.target.value)}
          style={{ width: '100%', padding: 6 }}
        />
      </div>
      <div style={{ marginBottom: 12 }}>
        <label htmlFor={emailId} style={{ display: 'block', marginBottom: 4 }}>Email:</label>
        <input
          id={emailId}
          type="email"
          value={email}
          onChange={e => setEmail(e.target.value)}
          style={{ width: '100%', padding: 6 }}
        />
      </div>
      <div>
        <strong>Entered Name:</strong> {name}<br />
        <strong>Entered Email:</strong> {email}
      </div>
    </form>
  );
}

export default UserForm;
