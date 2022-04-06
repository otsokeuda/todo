function Instructions(props) {
    console.log(props)
    return (
        <p onClick={() => props.klikkaus(props.thid)}>
        {props.kuvaus}       
      </p>
    );
  }
  export default Instructions;
