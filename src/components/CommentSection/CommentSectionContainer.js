import React from 'react';
import Comment from './Comment';
import CommentInput from './CommentInupt';
import PropType from 'prop-types';

class CommentSectionContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          comments: props.comments,
          comment: '',
          likes: props.likes,
          username: props.username,
          isLiked: false
        };
      }

      commentChange = (e) => {
        this.setState({
            comment: e.target.value
        });
      }

      commentSubmit = e => {
          e.preventDefault();
          const newComment = {
            text: this.state.comment,
            username: this.state.username
          };
          const comments = this.state.comments.slice();
          comments.push(newComment);
          this.setState({
              comments, 
              comment: ''
          })      
      }

    incrementLikes = () => {
        this.setState(prevState => ({
            likes: prevState.isLiked ? --prevState.likes : ++prevState.likes,
            isLiked: !prevState.isLiked
        }))
    }

    render() {
        return (
            <div className="CommentSection">
                <div className="likes">
                    <div className="icons">
                        <i className="far fa-2x fa-heart" onClick={this.incrementLikes}></i>
                        <i className="far  fa-2x fa-comment"></i>
                    </div>
                    <p>{this.state.likes} Likes</p>
                </div>
            {this.state.comments.map((x, i) => <Comment key={i} comment={x} /> )}
            <CommentInput
              comment={this.state.comment}
              commentSubmit={this.commentSubmit}
              commentChange={this.commentChange}
            />
          </div>
        );
    }
}

CommentSectionContainer.propTypes = {
    comments: PropType.arrayOf(PropType.object)
}

export default CommentSectionContainer;