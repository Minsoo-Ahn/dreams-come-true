import React from 'react';
import {Switch, BrowserRouter, Route} from 'react-router-dom';
import Navbar from '../components/navbar/Navbar';
import Example from '../components/Example';
import PostsForm from "../components/posts/PostsForm";

function Router(props) {
    console.log(props)
    return (
        <div>
            <BrowserRouter>
                <Navbar/>
                <div className="py-4">
                    <Switch>
                        <Route exact path="/" component={Example}/>
                        <Route path="/about" component={Example}/>
                        <Route path="/portfolio/:portfolio" component={Example}/>
                        <Route path="/works/:works" component={PostsForm}/>
                        <Route path="/words/:words" component={PostsForm}/>
                        <Route path="/todoList/:todoList" component={Example}/>
                    </Switch>
                </div>
            </BrowserRouter>
        </div>
    );
}

export default Router;
