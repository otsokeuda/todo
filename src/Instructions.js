function Instructions(props) {
    console.log(props)
    return (
        <p onClick={() => props.klikkaus()}>
        {props.kuvaus}       
      </p>
    );
  }
  export default Instructions;
