import React from 'react';

const Comment = (props) => {

    const {id,name,email,body}=props

    return (
        <div>
            <h4>id:{id}</h4>
            <h4>name:{name}</h4>
            <p>email:{email}</p>
            <p>body:{body}</p>
        </div>
    );
};

export default Comment;