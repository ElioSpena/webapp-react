import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainLayout from "../layouts/mainLayout";
import Homepage from "../pages/Homepage";
import Movies from "../pages/Movies";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<MainLayout />}>
            <Route path="/" element={<Homepage />} />
            <Route path="/movies" element={<Movies />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
