import React, { Component } from 'react';
import { connect } from 'react-redux';

export default (ChildComponent) => {
  class ComposedComponent extends Component {
    componentDidMount() {
      //Our component just got rendered.
      this.shouldNavigateAway();
    }

    componentDidUpdate() {
      this.shouldNavigateAway();
    }

    shouldNavigateAway() {
      if(!this.props.auth) {
        this.props.history.push("/");
      }
    }

    render() {
      return <ChildComponent {...this.props} />;
    }
  }

  function mapStateToProps(state) {
    return {
      auth: state.auth
    };
  }

  return connect(mapStateToProps)(ComposedComponent);
}

//Imagine we are in CommentBox.js

/*
  import requireAuth from 'components/requireAuth';

  class CommentBox extends Component {

  }

  export default requireAuth(CommentBox);
*/
