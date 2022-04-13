import React from 'react';

const User = (props) => {

    const {
        id,
        name,
        username,
        email,
        street,
        suite,
        city,
        zipcode,
        lat,
        lng,
        phone,
        website,
        companyName,
        catchPhrase,
        bs
    } = props;

    return (
        <div>
            <h1>id:{id}</h1>
            <h4>name:{name}</h4>
            <h4>username:{username}</h4>
            <p>email:{email}</p>
            <h4>address:</h4>
            <ul>
                <li>street:{street}</li>
                <li>suite:{suite}</li>
                <li>city:{city}</li>
                <li>zipcode:{zipcode}</li>
                <ul>
                    <li>geo lat:{lat}</li>
                    <li>geo lng:{lng}</li>
                </ul>
            </ul>
            <p>phone:{phone}</p>
            <p>website:{website}</p>
            <h4>company:</h4>
            <ul>
                <li>company name:{companyName}</li>
                <li>company catchPhrase:{catchPhrase}</li>
                <li>company bs:{bs}</li>
            </ul>
        </div>
    );
};

export default User;
