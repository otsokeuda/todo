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
         {valmiit.lenght}
      </p>
    );
  }
  export default Counter;
