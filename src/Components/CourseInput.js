import Button from './Button';
import styles from './CourseInput.module.css';
import {useState} from 'react';



function CourseInput(props) {
    const [enteredValue, setEnteredValue] = useState ("");

    const[isValid, setIsValid] = useState(true);

    const goalInputChangedHandler = (event) => {
        setEnteredValue(event.target.value);

        if (event.target.value.length > 0) {
            setIsValid(true);
        }
    };

    const formSubmitHandler = (event) => {
        event.preventDefault();

        if(enteredValue.length === 0) {
            setIsValid(false);
            return;
        }
        props.onAddGoal(enteredValue);
    } 
  return (
    <form onSubmit={formSubmitHandler}>
       {/* <div className={"form-control" + (!isValid ? "invalid":"")}> */}
       {/*<div className={`form-control ${!isValid ? " invalid ": " "}`}> */}
       {/*<div className={styles["form-control"]}> */}

       <div className={`${styles["form-control"]} ${!isValid ? " "+ styles["invalid"] : ""}`}>
     <label>Course Goal</label>
      <input type="text" onChange={goalInputChangedHandler}/>
    </div>
    {/*<button type="submit">Add goal</button>*/}
<br></br>
    <Button>Add Goal</Button>
    </form>
    
  )
}

export default CourseInput;
