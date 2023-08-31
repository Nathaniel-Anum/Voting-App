import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import CreatePage from './CreatePage';
import Home from './Home';
import {  useState} from 'react'

function App() {

  const [candidates, setCandidates] = useState([
    {
      name: "Nathaniel Adjei Anum",
      count: 0,
      party: "National Patrotic Party",
    },
    { name: "Bliss Nute Ayiku", count: 0, party: "New Peoples Party" },
    { name: "Prince Dadzie", count: 0, party: "National Democratic Congress" },
  ]);


 return (
<div className="voting-details">
  <Router>
    <Routes>
          <Route path='/' element={<Home setCandidates={setCandidates} candidates={candidates}/>}/>
          <Route path='/create' element={<CreatePage setCandidates={setCandidates} candidates={candidates}/>}/>
          <Route path='*' element={<h2>Page Not Found </h2>}/>
        </Routes> 
    </Router>
    </div>
  );

}

export default App;
