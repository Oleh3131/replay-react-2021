import React from 'react';

const User = (props) => {

    const {id, name, username, email, address, phone, website, company} = props;

    return (
        <div>
                <h1>id:{id}</h1>
                <h4>name:{name}</h4>
                <h4>username:{username}</h4>
                <p>email:{email}</p>
                {/*<p>street:{address.street}</p>*/}
                <p>suite:{address.suite}</p>
                {/*<p>city:{address.city}</p>*/}
                {/*<p>zipcode:{address.zipcode}</p>*/}
                {/*<p>zipcode geo:{address.geo.lat}</p>*/}
                {/*<p>zipcode geo:{address.geo.lng}</p>*/}
                {/*<p>phone:{phone}</p>*/}
                {/*<p>website:{website}</p>*/}
                {/*<p>company name:{company.name}</p>*/}
                {/*<p>company catchPhrase:{company.catchPhrase}</p>*/}
                {/*<p>company bs:{company.bs}</p>*/}
        </div>
    );
};

export default User;
