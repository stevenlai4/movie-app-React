import '../styles/App.scss';
import Banner from './Banner';
import Movie from './Movie';
import Navigation from './Navigation';

function App() {
    return (
        <div className="App">
            <Banner />
            <Navigation />
            <Movie />
        </div>
    );
}

export default App;
