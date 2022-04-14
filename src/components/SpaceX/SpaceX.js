import React, {useEffect, useState} from 'react';

const SpaceX = () => {

    const [spaceX, setSpaceX] = useState([]);

    useEffect(() => {

        fetch('https://api.spacexdata.com/v3/launches')
            .then(response => response.json())
            .then(data => setSpaceX(data.filter(value => {
                if (value.launch_year !== 2020) {
                    return
                }
            })));

    }, [])

    return (
        <div>

        </div>
    );
};

export default SpaceX;