import './App.css';
// import Images from './Images'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
// import Navbar from './Navbar';
import Navbar2 from './Navbar2'
import Home from './pages/Home'
import About from './pages/About'
import Blog from './pages/Blog'
import { ThemeProvider } from './theme-context';
import { UserProvider } from './UserContext'
import { Profile } from './Profile'


function App() {
  return (
    <div className="App">
      {/* <Images /> */}
      <ThemeProvider>
      <UserProvider>
      {/* <BrowserRouter> */}
      {/* <Navbar /> */}
      <Navbar2 />
      <Profile />
      {/* <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/blog" element={<Blog/>} />
      </Routes>
      </BrowserRouter> */}
      </UserProvider>
      </ThemeProvider>
    </div>
  );
}

export default App;
