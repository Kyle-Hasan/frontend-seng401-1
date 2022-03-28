
import './App.css';
import Home from './pages/Home';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import About from './pages/About';
import Login from './pages/Login';
import Signup from './pages/Signup'
import { UserProvider } from './context/UserContext';
import AppEntry from './pages/AppEntry';
import AppSearchResults from './pages/AppSearchResults';
import ViewApps from './pages/ViewApps';
import ReviewForm from './pages/ReviewForm';
import Reviews from "./pages/Reviews"
import UserProfile from './pages/UserProfile';
function App() {
  return (
    <UserProvider>
    <div className="App">
      <Router>
        <Routes>
          <Route path = '/' element = {<Home/>} />
          <Route path = '/about' element = {<About/>} />
          <Route path = '/login' element = {<Login/>} />
          <Route path = '/signup' element = {<Signup/>} />
          <Route path="/devResult" element = {<AppEntry/>}/>
          <Route path = "/search/:text" element = {<AppSearchResults/>}/>
          <Route path = "/loggedin" element = {<ViewApps/>} />
          <Route path = "/createReview" element = {<ReviewForm/>}/>
          <Route path = "/reviews" element = {<Reviews/>}/>
          <Route path = "/profile" element = {<UserProfile/>}/>
        </Routes>
   
      </Router>
    </div>
    </UserProvider>
  );
}

export default App;
