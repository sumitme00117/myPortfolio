import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'

import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Footer from './components/Footer/Footer';
import About from './components/About/About'
import Projects from './components/Projects/Projects'
import Contact from './components/Contact/Contact'
import Login from './components/Login/Login'
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { getUser, loadUser } from './actions/user';
import AdminPanel from './components/Admin/AdminPanel';
import Timeline from './components/Admin/Timeline';
import Youtube from './components/Admin/Youtube';
import Project from './components/Admin/Project'
function App() {

  const dispatch = useDispatch()
  const {isAuthenticated} = useSelector((state)=> state.login)
  const {loading, user} = useSelector((state)=> state.user)
  console.log(loading,user)
  useEffect(()=>{
    dispatch(getUser())
    dispatch(loadUser())
    
  },[dispatch])
  return (
    
    <Router>
      
      {loading ? <div>Loading...</div> : (
        <>
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home youtubes={user.youtube} timelines={user.timeline} skills={user.skills}/>}></Route>
        <Route path="/about" element={<About about={user.about}/>}></Route>
        <Route path="/projects" element={<Projects projects={user.projects}/>}></Route>
        <Route path="/contact" element={<Contact/>}></Route>
        <Route path="/account" element={isAuthenticated ? <AdminPanel/> : <Login/>}></Route>
        <Route path="/admin/timeline" element={isAuthenticated ? <Timeline/> : <Login/>}></Route>
        <Route path="/admin/youtube" element={isAuthenticated ? <Youtube/> : <Login/>}></Route>
        <Route path="/admin/project" element={isAuthenticated ? <Project/> : <Login/>}></Route>
      </Routes>
      <Footer></Footer>
      </>
      )
      }
    </Router>
  
  );
}

export default App;
