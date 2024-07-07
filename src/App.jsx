import React, { useState } from 'react';
import avatar1 from "./assets/avatars/image-amyrobson.png"
import avatar2 from "./assets/avatars/image-juliusomo.png"
import avatar3 from "./assets/avatars/image-maxblagun.png"
import avatar4 from "./assets/avatars/image-ramsesmiron.png"

const CommentSection = () => {
  const [replies, setReplies] = useState([
    { id: 1, author: 'amyrobson', avatar: avatar1, time: '1 month ago', content: 'Impressive! Though it seems the drag feature could be improved...', likes: 12, replying: false },
    { id: 2, author: 'maxblagun', avatar: avatar2, time: '2 weeks ago', content: 'Woah, your project looks awesome! How long have you been coding for?', likes: 5, replying: false },
    { id: 3, author: 'ramsesmiron', avatar: avatar3, time: '1 week ago', content: '@maxblagun If you\'re still new, I\'d recommend focusing on the fundamentals...', likes: 4, replying: false },
    { id: 4, author: 'juliosumo', avatar: avatar4, time: '2 days ago', content: '@ramsesmiron I couldn\'t agree more with this...', likes: 2, replying: false }
  ]);

  // Función para manejar la respuesta
  const handleReply = (id) => {
    setReplies(replies.map(reply => 
      reply.id === id ? { ...reply, replying: !reply.replying } : reply
    ));
  };

  return (
    <div className="comment-section">
      {replies.map(reply => (
        <div key={reply.id} className="comment">
          <div className="comment-header">
            <img src={reply.avatar} alt={`${reply.author}'s avatar`} className="avatar" />
            <span className="author">{reply.author}</span>
            <span className="time">{reply.time}</span>
            <div className="comment-actions">
              <button className="action-btn reply-btn" onClick={() => handleReply(reply.id)}>
                <svg width="16" height="16" viewBox="0 0 24 24"><path d="M21 11.5l-6-6v4.5H8c-2.76 0-5 2.24-5 5v3h2v-3c0-1.65 1.35-3 3-3h7v4.5l6-6z"/></svg>
                Reply
              </button>
              <button className="action-btn edit-btn">
                <svg width="16" height="16" viewBox="0 0 24 24"><path d="M3 17.25V21h3.75l11.08-11.08-3.75-3.75L3 17.25zm14.71-9.04a1 1 0 0 0 0-1.41l-2.34-2.34a1 1 0 0 0-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z"/></svg>
                Edit
              </button>
              <button className="action-btn delete-btn">
                <svg width="16" height="16" viewBox="0 0 24 24"><path d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zm3-10h2v9H9v-9zm4 0h2v9h-2v-9zm3-4h-2.5l-1-1h-5l-1 1H5v2h14V5z"/></svg>
                Delete
              </button>
            </div>
          </div>
          <div className="comment-body">
            <p>{reply.content}</p>
            <div className="likes">
              <svg className="like-icon" width="16" height="16" viewBox="0 0 24 24">
                <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"></path>
              </svg>
              {reply.likes} likes
            </div>
          </div>
          {reply.replying && (
            <div className="reply-form">
              <textarea placeholder="Add a reply..." />
              <button className="send-btn">Send</button>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default CommentSection;
