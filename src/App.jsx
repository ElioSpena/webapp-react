import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Homepage from "../pages/Homepage";
import Movies from "../pages/Movies";
import MovieDetails from "../pages/MovieDetails";
import NotFound from "../pages/notFound";
import NewMovieForm from "../pages/NewMovieForm";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<MainLayout />}>
            <Route path="/" element={<Homepage />} />
            <Route path="/movies" element={<Movies />} />
            <Route path="/movies/:slug" element={<MovieDetails />} />
            <Route path="/movies-form" element={<NewMovieForm />} />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
