import { Route, BrowserRouter } from 'react-router-dom';
import React from 'react';
import Home from './pages/Home';
import PostPage from './pages/PostPage/PostPage';
import EditPost from './pages/EditPost/edit-post';


const Routes = () => {
    return(
        <BrowserRouter>
            <Route component = {Home} path = "/" exact/>
            <Route component = {PostPage} path = "/CreatePost" exact/>
            <Route component = {EditPost} path = "/EditPost/:id" exact/>
        </BrowserRouter>
    );
} 

export default Routes;