import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import NavBar from "./components/NavBar";
import {TodoPage} from "./pages/todoPage";
import {AboutPage} from "./pages/AboutPage";


const App: React.FunctionComponent = () => {


    return (
        <BrowserRouter>
            <NavBar/>
            <div className='container'>
                <Switch>
                    <Route component={TodoPage} path='/' exact/>
                    <Route component={AboutPage} path='/about'/>
                </Switch>
            </div>
        </BrowserRouter>
    );
}

export default App;
