import { Route, BrowserRouter } from 'react-router-dom';
import React from 'react';
import Home from './pages/Home';
import PostPage from './pages/PostPage/PostPage'


const Routes = () => {
    return(
        <BrowserRouter>
            <Route component = {Home} path = "/" exact/>
            <Route component = {PostPage} path = "/CreatePost" exact/>
        </BrowserRouter>
    );
} 

export default Routes;