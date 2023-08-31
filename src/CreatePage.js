import './App.css';
import {Link} from 'react-router-dom'
import { useState } from "react";

const CreatePage = ({candidates, setCandidates}) => {
    const [input, setInput] = useState(" ")
    const [input2, setInput2] = useState(" ")

    
        const handleChange = (e) =>{
                setInput(e.target.value)
        }

        const handleChange2 = (e) =>{
            setInput2(e.target.value)   
    }

    const handleClick = (e) => {
        e.preventDefault();
            const blog = {
                name: input,
                party: input2,
                count: 0
            }
            let temp = [...candidates, blog]
            setCandidates(temp)            
    }



return ( 
        <div className="forms">
            <Link to="/"> Back Home</Link>
            <h2>This is the create page</h2>
            <form onSubmit={handleClick}>
                <label> Name of Participant: </label>
                <input type="text" 
                onChange={handleChange} 
                required/>
                <label> Name of Party: </label>
                <textarea onChange={(e)=> handleChange2(e)}></textarea>
                <div className="btn">
               <button className="button"type='submit'>Add Candidate</button>
                </div>
            </form>

            <div className="details">
                {/* <p>{input}</p>
                <p>{input2}</p> */}
            </div>

            <h1>Presidential Candidates</h1>
            <div className="displays">
           <table>
            <thead>
                <th>Name </th>
                <th>Party </th>
                <th>Number of Votes </th>
            </thead>
            <tbody>
                {candidates.map( (candidate,index) =>( 
                    <tr>
                        <td> {candidate.name} </td>
                        <td>{candidate.party} </td>
                        <td>{candidate.count} </td>
                        <td> </td>
                    </tr>
                ))}
            </tbody>
           </table>

      
            </div>
        </div>
       
     );
}
 
export default CreatePage;