import React from 'react';

// Emoji component which inititally renders a happy emoji
const Emoji = () => {
  const [emoji, setEmoji] = React.useState('😀'); // Initial emoji is a happy face

  // Function to change the emoji to a sad face
  const changeEmoji = () => {
    setEmoji('😢');
  };

  const changeMood = () => {
    setEmoji('😄'); // Change to a different emoji, e.g., a smiling face
  }

  return (
    <div>
      <h1>Emoji Component</h1>
      <p>{emoji}</p>
      <button onClick={changeEmoji}>Change Emoji</button>
      <button onClick={changeMood}>Change Mood</button>
    </div>
  );
};

export default Emoji;