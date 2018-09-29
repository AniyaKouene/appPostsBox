import React, {Component}  from 'react';
import {Router, Route, browserHistory}  from 'react-router';

import PostList from './containers/PostList'
import PostForm from './containers/PostForm'
import Post from './containers/Post'
import NotFound from './components/NotFound'

class  Routes extends Component {
    render() {
        return (
            <div className="container">
                <Router history={browserHistory}>
                    <Route path="/" component={PostList} />
                    <Route path="create-post" component={PostForm} />
                    <Route path="post/:id" component={Post} />
                    <Route path="*" component={NotFound} />
                    

                
                </Router>
            </div>
            
        );
    }
}

export default Routes ;