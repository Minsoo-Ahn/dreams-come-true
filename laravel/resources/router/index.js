import React from 'react';
import {Switch, BrowserRouter, Route} from 'react-router-dom';
import Navbar from '../js/components/Navbar/Navbar';
import Example from '../js/components/Example';

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
                        <Route path="/works/:works" component={Example}/>
                        <Route path="/words/:words" component={Example}/>
                        <Route path="/todoList/:todoList" component={Example}/>
                    </Switch>
                </div>
            </BrowserRouter>
        </div>
    );
}

export default Router;
