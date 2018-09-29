import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import { readAllPosts, deletePost } from "../actions/index";

import PostListItem from "../components/PostListItem";

class PostList extends Component {
  componentWillMount() {
    this.props.readAllPosts();
  }

  renderPost() {
    const { posts } = this.props;
    if (posts) {
      return posts.map(post => {
        return <PostListItem key={post.id} post={post} deletePostCallBack={(post) => this.deletePostCallBack(post)}/>;
      });
    }
  }

  deletePostCallBack(post) {
    console.log("delete", post);
    this.props.deletePost(post.id);
  }
  render() {
    console.log(this.props.posts);

    return (
      <div className="row mx-auto">
        <h1>Liste de posts</h1>
        <table className=" table table-striped table-responsive-xl table-hover">
          <thead>
            <tr>
              <th>Titre</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>{this.renderPost()}</tbody>
        </table>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    posts: state.posts
  };
};

const mapDispatchToProps = dispatch => {
  return bindActionCreators({ readAllPosts, deletePost }, dispatch);
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PostList);
