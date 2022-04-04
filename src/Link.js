function Link(props) {
  console.log(props)
  
    return (
        <a class="text" href="target" >
       {props.text}
       {props.target}       
      </a>
    );
  }
  export default Link;