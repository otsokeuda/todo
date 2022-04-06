function Instructions(props) {
    console.log(props)
    
    if (props.valmis === false ) {
      return null;
   }
   
    return (
        <p onClick={() => props.klikkaus(props.thid)}>
        {props.kuvaus}               
      </p>
    );
  }
  export default Instructions;
