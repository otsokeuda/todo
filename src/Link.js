function Link(props) {
  
    return (
        <a href={props.target} class="text">    
       {props.text}   
      </a>    
    );
  }
  export default Link;