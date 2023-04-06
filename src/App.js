import './App.css';
import { useState, useEffect } from 'react';
import { Routes, Route, Navigate, useLocation } from 'react-router-dom';
import Home from './components/pages/Home';
import Campaign from './components/pages/Campaign';
import Login from './components/pages/Login/Login';
import Signup from './components/pages/Signup/Signup';
import NavBar from './components/common/NavBar'
import Footer from './components/common/Footer/Footer'
import CardDetails from './components/common/CardDetails/CardDetails';
import About from './components/common/About';
import Admin from './components/pages/Admin/Admin';


function App() {
  const [search, setSearch] = useState("")
  const [user, setUser] = useState(false)

  useEffect(() => {
    fetch("/loggedin")
      .then((r) => {
        if (r.ok) {
          r.json().then((user) => {
            setUser(user)
          })
        }
      })
  }, [])

  const userId = user && user.user && user.user.id
  function setSearchString(str) {
    setSearch(str);
  }

  const { pathname } = useLocation()
  const isHome = pathname === '/'
  const isLogin = pathname == '/login'
  const isSignup = pathname == '/signup'

  return (
    <div>
      {/* user cannot see the rest of the website of not logged in  */}
      {!isHome && !isLogin && !isSignup && <NavBar user={user} setSearchString={setSearchString} />}
      <Routes>
        <Route path='/' element={<Navigate to='/home' />} />
        <Route path='/home' element={<Home search={search} />} />
        <Route path='/admin' element={<Admin />} />
        <Route path='/campaigns' element={<Campaign search={search} user={user} />} />
        <Route path='/about' element={<About />} />
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<Signup />} />
        <Route path='/campaigns/:id' element={<CardDetails userId={userId} />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
