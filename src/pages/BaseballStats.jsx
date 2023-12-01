import { useState, useEffect } from 'react';

const BaseballStats = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        fetch('https://api.sampleapis.com/baseball/hitsSingleSeason')
            .then(response => response.json())
            .then(data => setData(data))
            .catch(error => console.error('Error fetching data:', error));
    }, []);

    return (
        <div>
            <h1>Baseball Hits Single Season Stats</h1>
            {data.map((player, index) => (
                <div key={index}>
                    <p>
                        {
                            `Rank: ${player.Rank}, 
                            Player: ${player.Player}, 
                            Age: ${player.AgeThatYear}, 
                            Hits: ${player.Hits}, 
                            Year: ${player.Year}, 
                            Bats: ${player.Bats}`
                        }
                    </p>
                </div>
            ))}
        </div>
    );
}

export default BaseballStats;
