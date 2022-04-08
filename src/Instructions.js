function Instructions(props) {
    
    if (props.valmis === true ) {
      return (
      <p>{props.kuvaus + " - valmis"}</p>
      );
   }
   
    return (
        <p onClick={() => props.klikkaus(props.thid)}>
        {props.kuvaus}               
      </p>
    );
  }
  export default Instructions;
