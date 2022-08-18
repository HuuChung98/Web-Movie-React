import { Routes, Route} from "react-router-dom";
import Home from "./modules/Home/pages/Home";
import Login from "./modules/Auth/pages/Login";
import Register from "./modules/Auth/pages/Register";
import MovieDetails from "./modules/Movie/pages/MovieDetails";


function App() {
  return (
    <>
      <Routes>

        <Route path="/" element={<Home />}/>
        <Route path="/movies/:movieId" element={<MovieDetails />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={< Register />} /> 
      </Routes>
    </>
  )
}

export default App;
