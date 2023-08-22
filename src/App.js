import React from 'react';
import Home from './pages/Home'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import SearchAppBar from './components/AppBar';
import Movie from './pages/Movie';


const App = () => {
  return (
    <BrowserRouter>
    <SearchAppBar />
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/:id' element={<Movie />} />

        </Routes>
    </BrowserRouter>
  )
}

export default App