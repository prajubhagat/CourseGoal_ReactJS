import './CourseGoalList.css'
import CourseGoalItem from './CourseGoalItem'

function CourseGoalList(props) {
  return (

    <ul className='goal-list'>
      {props.items.map((goal) => {
        return <CourseGoalItem
         text = {goal.text}
          id = {goal.id}
            onDelete={props.onDeleteItem}
          />
      })}
    </ul>
  )
}

export default CourseGoalList;
