import React, {useEffect, useState} from 'react';

import Rocket from "../Rocket/Rocket";
import '../../App.css'


const SpaceX = () => {

    const [spaceX, setSpaceX] = useState([]);

    useEffect(() => {

        fetch('https://api.spacexdata.com/v3/launches')
            .then(response => response.json())
            .then(data => setSpaceX(data.filter(value => {
                if (value.launch_year !== '2020') {
                    return value;
                }
            })));
    }, [])

    return (
        <div className={'SpaceX'}>
            {spaceX.map(value => <Rocket
                key={value.launch_date_unix}
                missionName={value.mission_name}
                launchYear={value.launch_year}
                missionPatchSmall={value.links.mission_patch_small}
            />)}
        </div>
    );
};

export default SpaceX;