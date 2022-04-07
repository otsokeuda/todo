function Counter(props) {
  const valmiit = props.list.filter(
    tehtava => {
      
      console.log(tehtava);
      if (tehtava.completed === true) { return true }
      return false;
    }
  );
    return (
      <p class="list">
         {valmiit.length}
      </p>
    );
  }
  export default Counter;
