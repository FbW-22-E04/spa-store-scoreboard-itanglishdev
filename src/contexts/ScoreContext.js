import {createContext, useState} from 'react' 

export const ScoreContext = createContext()

export function ScoreContextProvider({children}) {

    const [score, setScore] = useState(0)
    
    function plusScore(){
        setScore(score + 10)
    }

    function minusScore(){
        setScore(score -10)
    }

    return (
        <ScoreContext.Provider value={{score, plusScore, minusScore}}>
        {children}
        </ScoreContext.Provider>
      );
}
