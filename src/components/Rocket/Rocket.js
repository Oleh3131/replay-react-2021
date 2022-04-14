import React from 'react';

import '../../App.css'


const Rocket = (props) => {

    const {missionName,launchYear,missionPatchSmall}=props

    return (
            <div className={'Rocket'}>
                <div className={'FirstBlock'}>
                    <h4>{missionName}</h4>
                    <p>{launchYear}</p>
                </div>
                <div className={'SecondBlock'}>
                    <img src={missionPatchSmall} alt={missionName}/>
                </div>
            </div>
    );
};

export default Rocket;