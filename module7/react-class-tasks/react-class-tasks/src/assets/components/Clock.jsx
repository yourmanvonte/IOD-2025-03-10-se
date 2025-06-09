import { useEffect, useState } from 'react';

const Clock = () => {
    const [date, setDate] = useState(new Date());

    useEffect(() => {
        const intervalId = setInterval(() => tick(), 1000);
        console.log('Clock component mounted');

        return () => {
            clearInterval(intervalId);
            console.log('Clock component unmounted')
        }
    }, []);

    const tick = () => {
        setDate(new Date());
        console.log('tick');
    };

    return (
        <div className="Clock">
            <h3>Digital Clock</h3>
            {date.toLocaleTimeString()}
        </div>
    );
}

const ClockDisplay = () => {
    const [showClock, setShowClock] = useState(false);

    const toggleClock = () => {
        setShowClock(!showClock)
    }

    return (
        <div className="ClockDisplay componentBox">
            {showClock && <Clock />}
            <button onClick={toggleClock}>Toggle Clock</button>
        </div>
    )
}

export default Clock;
export  {ClockDisplay};