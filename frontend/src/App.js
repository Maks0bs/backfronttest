import React, { Component } from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import Home from './Home'
import Comp1 from './Comp1'
import Comp2 from './Comp2'


class App extends Component {

    

    render() {
        return (
            <BrowserRouter>
                <div>
                    <Switch>
                        <Route
                            exact  
                            path="/"
                            component={Home}
                        />
                        <Route
                            exact  
                            path="/comp1"
                            component={Comp1}
                        />
                        <Route
                            exact  
                            path="/comp2"
                            component={Comp2}
                        />
                    </Switch>
                </div>
            </BrowserRouter>
        );
    }
}

export default App;