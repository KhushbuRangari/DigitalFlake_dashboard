import './App.css';
import Navbar from './Components/Navbar';
import Sidemenu from './Components/Sidemenu';
import Home from './Components/pages/Home';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Logout from './Components/pages/Logout';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { AuthProvider } from './Components/context/AuthContext';
import Product from './Components/pages/Product';
import Category from './Components/pages/Category';


function App() {
  return (
    <Router>
      <div className="App">
        <AuthProvider>
          <Navbar></Navbar>
          <Routes>
            <Route path='/' element={<Home></Home>}></Route>
            <Route path='/main' element={<Sidemenu></Sidemenu>}></Route>
            <Route path='/category' element={<Category></Category>}></Route>
            <Route path='/product' element={<Product></Product>}></Route>
            <Route path='/logout' element={<Logout></Logout>}></Route>
          </Routes>
          <ToastContainer />
        </AuthProvider>
      </div>
    </Router>
  );
}

export default App;
