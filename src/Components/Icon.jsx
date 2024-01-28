import { FaPenSquare, FaRegCircle, FaTimes } from "react-icons/fa"

function Icon({name}){
 
   if(name=="Circle"){
        return <FaRegCircle/>
    }
    else if(name=="Cross"){
        return <FaTimes/>
    }
    else{
        return <FaPenSquare/>
    }

}
export default Icon ;
