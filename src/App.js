import './App.css';
import Home from "./pages/home"
import Profile from "./pages/profile"
import Post from "./pages/post-create"
import Feed from "./pages/feed-detail"
import {Routes,Route} from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <h1>Instagram</h1>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/profile' element={<Profile/>}/>
      <Route path='/post-create' element={<Post/>}/>
      <Route path='/feed-detail/:id' element={<Feed/>}/>
    </Routes>
    </div>
  );
}

export default App;
