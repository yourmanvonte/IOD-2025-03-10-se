import { useState, useEffect } from 'react';

const ActivityFinder = () => {
    const [participants, setParticipants] = useState(1);
    const [activity, setActivity] = useState('');

    useEffect(() => {
        console.log('running effect');
        let ignore = false;

        fetch('https://www.boredapi.com/api/activity?' + 'participants=' + participants)
        .then(response => response.json())
        .then(json => {
            if (!ignore) setActivity(json.activity);
        });

        return () => {
            ignore = true;
            console.log('cleanup effect');
        };
    }, [participants]);

    return (
        <div className="ActivitiyFinder">
            <h3>Activity Finder</h3>
            <label>Choose number of participants:
              <select value={participants} onChange={e => setParticipants(e.target.value)}>
                <option>1</option><option>2</option><option>3</option>
              </select>
            </label>
            <div><strong>Suggested Activity:</strong>{activity}</div>
        </div>
    )
}

export default ActivityFinder;