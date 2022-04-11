import check from './check.png';

function Instructions(props) {
    
    if (props.valmis === true ) {
      return (
      <p>{props.kuvaus} <img src={check} alt="" width={20}/></p>
      );
   }
   
    return (
        <p onClick={() => props.klikkaus(props.thid)}>
        {props.kuvaus}               
      </p>
    );
  }
  export default Instructions;
