import {ScoreContext} from "../contexts/ScoreContext";
import {useContext} from 'react'
import Infoboard from "./Infoboard";

function Scoreboard() {

    const {score, plusScore, minusScore} = useContext(ScoreContext)


    return (

        <div>
             <h2>{score}</h2>
      <button onClick={()=>plusScore()}>Add</button>
      <button onClick={()=>minusScore()}>Subtract</button>
      <Infoboard/>
        </div>
      );
}

export default Scoreboard;