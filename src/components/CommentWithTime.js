import React, { useState, useEffect } from 'react';

function CommentWithTime() {
  const [comment, setComment] = useState('');
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div style={{ margin: '24px auto', maxWidth: 400, padding: 16, border: '1px solid #ccc', borderRadius: 8 }}>
      <h3>Current Time: {time.toLocaleTimeString()}</h3>
      <textarea
        value={comment}
        onChange={e => setComment(e.target.value)}
        placeholder="Add your comment..."
        rows={4}
        style={{ width: '100%', marginBottom: 8 }}
      />
      <div><strong>Your comment:</strong> {comment}</div>
    </div>
  );
}

export default CommentWithTime;
