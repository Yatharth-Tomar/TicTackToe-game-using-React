import Card from "./Card";
import { useState } from "react";
import "./grid.css"
import checkWinner from "../helper/checkWinner";

function Grid({numberOfCards}){
    const [board,setBoard]=useState(Array(numberOfCards).fill(" "))
    const [turn,setTurn]=useState(false)
    const [winner,setWinner]=useState(null)

    function play(index){
        if(turn==true){
            board[index]="X"
        }
        else{
            board[index]="O"
        }
        const win=checkWinner(board,(turn)?"X":"O")
        if(win){
            setWinner(win)
        }
        setBoard([...board])
        setTurn(!turn)
    }
    function resetGame(){
        setWinner(null)
        setBoard(Array(numberOfCards).fill(" "))
    }

    return(<>
    
    <div className="grid">
        {
            winner && (
                <>
                <h2>Player {winner} wins!</h2>
                <button className="btn"  onClick={()=>resetGame()}>Reset</button>
                </>
                
                
            )
        }

        {board.map((ele,idx)=><Card key={idx} gameEnd={winner}player={ele} onPlay={play} index={idx}/>)}

    </div>
    <h3 >Current turn is : {(turn)?"X":"O"}</h3>
    </>)
    
    
}


export default Grid;