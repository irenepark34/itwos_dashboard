import Home from "./pages/home/Home";
import Admin from "./pages/admin/Admin";
import Login from "./pages/login/Login";
import './app.css';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";


function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <Routes>
          <Route path='/'>
            <Route index element={<Home />} />
          </Route>
          <Route path='/login'>
            <Route index element={<Login />} />
          </Route>
          <Route path='/admin'>
            <Route index element={<Admin />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
