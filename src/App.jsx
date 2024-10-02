import './App.css'
import Footer from './Components/Footer'
import Header from './Components/Header'
import { Route,Routes } from 'react-router-dom'
import LandingPage from './Pages/LandingPage'
import WatchHistory from './Pages/WatchHistory'
import PageNotFound from './Pages/PageNotFound'
import Home from './Pages/Home'

function App() {
  

  return (
    <>
      <Header/>
      <Routes>
        <Route path={'/'} element={<LandingPage/>}/>
        <Route path={'/home'} element={<Home/>}/>
        <Route path={'/watchHistory'} element={<WatchHistory/>}/>
        <Route path={'/*'} element={<PageNotFound/>}/>
      </Routes>
      <Footer/>
    </>
  )
}

export default App
