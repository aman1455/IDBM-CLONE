import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css';
import Header from "./components/header/Header";
import Home from "./pages/home/home";

function App() {
  return (
    <div className="App">
       <Router>
         <Header/>
            <Routes>
                <Route  index element={<Home/>}></Route>
                <Route path="movie/:id" element={<h2>movie details page</h2>} ></Route>
                <Route path="movies/:type" element={<h2>movie type</h2>} ></Route>
                <Route path="/*" element={<h1>Error Page 404</h1>}></Route>
            </Routes>
        </Router>
    </div>
  );
}

export default App;
