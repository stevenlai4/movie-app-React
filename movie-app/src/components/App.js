import React from 'react';
import '../styles/App.scss';
import Navigation from './Navigation';
import Banner from './Banner';
import Movie from './Movie';
import Footer from './Footer';
import { BrowserRouter as Router, Route } from 'react-router-dom';

function App() {
    return (
        <div className="App">
            <Router>
                <Route exact path="/">
                    <Banner />
                    <Navigation />
                    <Movie />
                </Route>
                <Footer />
            </Router>
        </div>
    );
}

export default App;
