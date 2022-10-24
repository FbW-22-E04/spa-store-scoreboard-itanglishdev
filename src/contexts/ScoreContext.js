import {createContext, useContext, useState} from 'react' 

const Context = createContext()

export function ScoreContextProvider({children}) {

    const [score, setScore] = useState(0)
    
    function plusScore(){
        setScore(prev => prev + 10)
    }

    function minusScore(){
        setScore(prev => prev -10)
    }

    return <Context.Provider value={{score, setScore,plusScore, minusScore}}>
    {children}
    </Context.Provider>
}

function ScoreContext() {


    return (
        <div>
            
        </div>
      );
}

export default ScoreContext;