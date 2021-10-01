import React from 'react';
import {Switch, BrowserRouter, Route} from 'react-router-dom';
import Navbar from '../components/navbar/Navbar';
import PostForm from "../components/posts/PostForm";
import PostDetail from "../components/posts/PostDetail";
import AllPosts from "../pages/AllPosts";
import Home from "../components/Home"

function Router(props) {
    console.log(props)
    return (
        <BrowserRouter>
            <Navbar/>
            <div className="col-md-8">
                <Switch>
                    <Route exact path="/" component={Home}/>
                    <Route path="/about" component={PostDetail}/>
                    <Route path="/portfolio/:portfolio" component={AllPosts}/>
                    <Route path="/works/:works" component={PostDetail}/>
                    <Route path="/words/:words" component={PostForm}/>
                    <Route path="/todoList/:todoList" component={PostDetail}/>
                </Switch>
            </div>
            <div className="col-md-2"/>

        </BrowserRouter>
    );
}

export default Router;
