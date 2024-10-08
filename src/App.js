import './App.css';
import Nav from "./components/Nav";
import {Outlet, Route, Routes} from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import MainPage from "./pages/MainPage";
import DetailPage from "./pages/DetailPage";
import SearchPage from "./pages/SearchPage";
import IdPage from "./pages/IdPage";

const Layout = () => {
  return(
    <div>
      <Nav/>
      <Outlet/>
    </div>
  );
}

function App() {
  return (
    <div className='app'>
      <Routes>
        <Route path="/" element={<Layout/>}>
          <Route index element={<LoginPage/>} />
          <Route path="id" element={<IdPage/>} />
          <Route path="main" element={<MainPage/>} />
          <Route path=":movie" element={<DetailPage/>} />
          <Route path="search" element={<SearchPage/>} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
