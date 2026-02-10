import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import { SearchProvider } from "../context/SearchContext";

export default function MainLayout() {
  return (
    <>
      <SearchProvider>
        <Header />

        <main className="container mt-5">
          <Outlet />
        </main>
      </SearchProvider>
    </>
  );
}
