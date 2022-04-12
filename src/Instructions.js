import {FcOk} from "react-icons/fc";

function Instructions(props) {
    
    if (props.valmis === true ) {
      return (
      <p>{props.kuvaus} <FcOk/></p>
      );
   }
   
    return (
        <p onClick={() => props.klikkaus(props.thid)}>
        {props.kuvaus}               
      </p>
    );
  }
  export default Instructions;
