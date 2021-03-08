import React from 'react';
import './App.css';
import { HashRouter as Router, Route } from 'react-router-dom';
import About from './components/about/About';
import Gallery from './components/gallery/Gallery';
import Products from './components/products/Products'
import Main from './components/shared/Main';
import Navigation from './components/shared/Navigation';

const App = () => {

    return (
        <div className="App">
            <Router>
                <Navigation />
                <div className="container p-4">
                    <Route path="/" exact component={Main}></Route>
                    <Route path="/about" component={About}></Route>
                    <Route path="/gallery" component={Gallery}></Route>
                    <Route path="/products" component={Products}></Route>
                </div>
            </Router>
        </div>
    );
}

export default App;