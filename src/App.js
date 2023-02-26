
import MovieList from "./components/MovieList";
import MovieDetails from "./components/MovieDetails";
import NowPlaying from "./components/NowPlaying"
import Upcoming from "./components/Upcoming";
import SearchBar from "./components/SearchBar"
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Navbar />
			<SearchBar/>
      <Routes>
        <Route exact path="/" element={<MovieList />}/>
        <Route path="/movies/:id" element={<MovieDetails />}/>
        <Route path="/upcoming" element={<Upcoming />}/>
        <Route path="/upcoming/:id" element={<MovieDetails />}/>
        <Route path="/nowplaying" element={<NowPlaying />}/>
        <Route path="/nowplaying/:id" element={<MovieDetails />}/>
      </Routes>
    <div className="App">
        <div>
     </div>
    </div>
    </Router>

  );
}

export default App;
                                          