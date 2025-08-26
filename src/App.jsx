import { BrowserRouter as Router, Routes, Route, Link, useNavigate } from 'react-router-dom';
import { Home } from './Pages/Home';
import { About } from './Pages/About';
import { Contact } from './Pages/Contact';
import { RecentWork } from './Pages/RecentWork';

function App() {

  
  return (
    <div>
      <Router>
        <Routes>
          <Route path='/' element={<Home/>}></Route>
          <Route path='/about' element={<About/>}></Route>
          <Route path='/contact' element={<Contact/>}></Route>
          <Route path='/recent-work' element={<RecentWork/>}></Route>
        </Routes>
      </Router>
    </div>
  )
}

export default App
