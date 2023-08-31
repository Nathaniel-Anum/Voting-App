
import {Link} from 'react-router-dom'


const Home = ({candidates, setCandidates}) => {
  

  const handleClick = (index) => {
    let temp = [...candidates];
    temp[index].count += 1;
    setCandidates(temp);
  };

  return (
    <div className="App">
      <div className="create-page">
        <Link to="/create"> Add New Candidate</Link>
        {/* <a href="/create"> Add New Candidate</a> */}
      </div>
      
      <h1>Presidential Candidates</h1>
      <div className="display">
        {candidates.map((candidate, index) => (
          <div className="candidate">
            <p>{candidate.name}</p>
            <p>Representing: {candidate.party}</p>
            {/* <p>{candidate.count}</p> */}
            <button onClick={() => handleClick(index)}> Vote </button>
          </div>
          
        ))}
      </div>
    </div>
  );
};

export default Home;
