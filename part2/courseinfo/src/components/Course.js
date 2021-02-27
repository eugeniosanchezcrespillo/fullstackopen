import React from 'react';
//import ReactDOM from 'react-dom';

const Header = ({ course }) => {
  console.log({ course });
  return <h1>{course}</h1>;
};

/*
Wrong Solution
array.map ((item,i)=> <li key={i}> {item.name}</li>)

Better Solution
let counter = 1
array.map ((item)=> <li key={counter++}> {item.name}</li>)

Much Better Production solution
import { nanoid } from 'nanoid';
const createNewTodo = (text) => ({
  completed: false,
  id: nanoid(),
  text
}
*/

const Content = ({ parts }) => {
  console.log(parts);
  let todoCounter = 0;
  return (
    <div>
      {parts.map((part) => (
        <p key={todoCounter++}>
          {part.name} {part.exercises}
        </p>
      ))}
    </div>
  );
};

/* const Total = (props) => {
  console.log(props);
  return (
    <p>
      Number of exercises{' '}
      {props.parts[0].exercises +
        props.parts[1].exercises +
        props.parts[2].exercises}
    </p>
  );
}; */

const Course = ({ course }) => {
  return (
    <div>
      <Header course={course.name} />
      <Content parts={course.parts} />
      {/* <Total parts={course.parts} /> */}
    </div>
  );
};

export default Course;
