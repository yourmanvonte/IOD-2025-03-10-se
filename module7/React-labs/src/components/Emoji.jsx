import React from 'react';
import { useEmoji } from './EmojiContext';

const Emoji = () => {
  const { emoji, changeEmoji, changeMood } = useEmoji();

  return (
    <div className="Emoji componentBox">
      <h1>Emoji Component</h1>
      <p style={{ fontSize: '2rem' }}>{emoji}</p>
      <button onClick={changeEmoji}>Change Emoji</button>
      <button onClick={changeMood}>Change Mood</button>
    </div>
  );
};

export default Emoji;