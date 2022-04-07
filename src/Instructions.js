function Instructions(props) {
    
    if (props.valmis === true ) {
      return null;
   }
   
    return (
        <p onClick={() => props.klikkaus(props.thid)}>
        {props.kuvaus}               
      </p>
    );
  }
  export default Instructions;
