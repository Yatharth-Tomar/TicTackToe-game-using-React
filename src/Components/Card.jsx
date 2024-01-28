import Icon from "./Icon";
import "./icon.css"

function Card({player,gameEnd,index,onPlay}){
    let icon=<Icon/>
    if(player=="X"){
        icon =<Icon name="Cross"/>
    }
    else if(player=="O"){
        icon=<Icon name="Circle"/>
    }
  
    return (
    <div className="icons" onClick={()=>!gameEnd && player==" " && onPlay(index)}>
    {icon}
    </div>
       
    )

}
export default Card;