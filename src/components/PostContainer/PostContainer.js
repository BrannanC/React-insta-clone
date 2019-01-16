import React from 'react';
import PropType from 'prop-types';
import Post from './Post';

const PostContainer = (props) => {
    return (
        <div>
            {props.pageData.map(x => <Post
            username={props.username}
          postData={x} 
          key={`${x.username}${x.timestamp}` }
        />)}
        </div>
    );
}

PostContainer.propTypes = {
    pageData: PropType.array.isRequired
}

export default PostContainer;