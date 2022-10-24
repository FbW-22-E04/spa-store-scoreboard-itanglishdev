import {useContext} from 'react'
import {ScoreContext} from '../contexts/ScoreContext'


function Infoboard() {

const {score} = useContext(ScoreContext)

    return (
      <div>
          <h3 >{score < 100 ? 'Let\'s make it 100!' :'Good job!'}</h3>
          
        </div>
              );
}

export default Infoboard;
