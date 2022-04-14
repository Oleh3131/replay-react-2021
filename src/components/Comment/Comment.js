import React from 'react';

import "../../App.css";

const Comment = (props) => {

    const {id,name,email,body}=props

    return (
        <div className={'Comment'}>
            <h4>id:{id}</h4>
            <h4>name:{name}</h4>
            <p>email:{email}</p>
            <p>body:{body}</p>
        </div>
    );
};

export default Comment;

