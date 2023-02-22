
import MovieList from "./components/MovieList";
import MovieDetails from "./components/MovieDetails";
import FavoritesMovie from "./components/FavoritesMovie";
import Upcoming from "./components/Upcoming";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<MovieList />}/>
        <Route path="/movies/:id" element={<MovieDetails />}/>
        <Route path="/upcoming" element={<Upcoming />}/>
        <Route path="/upcoming/:id" element={<Upcoming />}/>
        <Route path="/favorite" element={<FavoritesMovie />}/>
        <Route path="/favorite/:id" element={<FavoritesMovie />}/>
      </Routes>
    <div className="App">
        <div>
     </div>
    </div>
    </Router>

  );
}

export default App;
