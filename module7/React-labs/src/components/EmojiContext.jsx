import React, { createContext, useState, useContext } from 'react';

const EmojiContext = createContext();

export const EmojiProvider = ({ children }) => {
    const [emoji, setEmoji] = useState('😀')

    const changeEmoji = () => setEmoji('🥲');
    const changeMood = () => setEmoji('😝');


  return (
   <EmojiContext.Provider value={{emoji, changeEmoji, changeMood}}>
    {children}
   </EmojiContext.Provider>
  );
};

export const useEmoji = () => useContext(EmojiContext);