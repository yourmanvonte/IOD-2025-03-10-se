import React from 'react';

type MoodChangerProps = {
  mood: string;
  setMood: React.Dispatch<React.SetStateAction<string>>;
};

function MoodChanger({ mood, setMood }: MoodChangerProps) {

    return (
        <div className="MoodChanger componentBox">
            Current Mood: {mood}
        <button onClick={() => setMood('tired')}>Stay Up Late</button>
        <button onClick={() => setMood('hungry')}>Skip Lunch</button>
        </div>
    )
}

export default MoodChanger;