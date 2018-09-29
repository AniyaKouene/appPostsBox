import React, { Component } from "react";

import { Link } from "react-router";
import { reduxForm } from "redux-form";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { browserHistory } from "react-router";

import { createPost } from "../actions/index";

const formConfig = {
  form: "createPostForm",
  fields: ["title", "content", "author"]
};
class PostForm extends Component {
  render() {
    const { fields, handleSubmit } = this.props;
    return (
      <div>
        <h1>Nouveau Post</h1>
        <form onSubmit={handleSubmit(this.createPost.bind(this))}>
          <div className="form-group">
            <label>Titre</label>
            <input className="form-control" type="text" {...fields.title} />
          </div>
          <div className="form-group">
            <label>Description</label>
            <input
              className="form-control"
              type="textarea"
              {...fields.content}
            />
          </div>
          <div className="form-group">
            <label>Auteur</label>
            <input className="form-control" type="text" {...fields.author} />
          </div>
          <Link to={"/"} className="button_space">
            <button className="btn btn-danger">Retour</button>
          </Link>
          <button type="submit" className="btn btn-primary">
            Créer
          </button>
        </form>
      </div>
    );
  }
  createPost(post) {
    this.props.createPost(post);
    browserHistory.push("/");
  }
}

const mapDispatchToProps = dispatch => ({
  ...bindActionCreators({ createPost }, dispatch)
});
export default connect(
  null,
  mapDispatchToProps
)(reduxForm(formConfig)(PostForm));
