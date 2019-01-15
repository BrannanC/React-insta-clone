import React from 'react';
import PropType from 'prop-types';
import Post from './Post';

const PostContainer = (props) => {
    return (
        <div>
            {props.pageData.map(x => <Post
          postData={x} 
          key={`${x.username}${x.timestamp}` }
        />)}
        </div>
    );
}

PostContainer.propTypes = {
    postData: PropType.shape({
        username: PropType.string,
        thumbnailUrl: PropType.string,
        imageUrl: PropType.string,
        likes: PropType.number,
        timestamp: PropType.string,
        comments: PropType.array
    }),
}

export default PostContainer;