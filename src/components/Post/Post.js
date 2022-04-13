import React from 'react';

const Post = (props) => {

    const {id,title,body} = props;

    return (
        <div>
            <h4>id:{id}</h4>
            <p>title:{title}</p>
            <p>body:{body}</p>
        </div>
    );
};

export default Post;