function Link(props) {
  console.log(props)
  
    return (
        <a href={props.target} class="text">    
       {props.text}   
      </a>    
    );
  }
  export default Link;