function Counter(props) {
    console.log(props)

    const valmiit = props.list.filter(
      tehtava => {
        if (tehtava < 5) { return true }
        return false;
        console.log(tehtava)
      }
    );

    
    
      return (
          <p class="list"> 
           {props.list}
            
        </p>              
      );
    }
    export default Counter;