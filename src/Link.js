function Link(props) {
  console.log(props)
  
    return (
        <a class="text" href = "https://reactjs.org" >
       {props.text}       
      </a>
    );
  }
  export default Link;