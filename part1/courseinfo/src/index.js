import React from 'react';
import ReactDOM from 'react-dom';

/*
const Header = (props) => {
  const course = props.course
  //const {course} = props

  return <h1>{course}</h1>

const Header = ({ course }) => <h1>{course}</h1>;  
}

*/
const Header = ({ course }) => {
  console.log({ course });
  return <h1>{course}</h1>;
};
const Part = (props) => {
  console.log(props.part);
  return (
    <p>
      {props.part.name} {props.part.exercises}
    </p>
  );
};
const Content = (props) => {
  console.log(props);
  return (
    <div>
      <Part part={props.part1} />
      <Part part={props.part2} />
      <Part part={props.part3} />
    </div>
  );
};
const Total = ({ amount }) => {
  console.log({ amount });
  return <p> Number of exercises {amount} </p>;
};
const App = () => {
  //Const
  const course = 'Half Stack application development';
  const part1 = {
    name: 'Fundamentals of React',
    exercises: 10,
  };
  const part2 = {
    name: 'Using props to pass data',
    exercises: 7,
  };
  const part3 = {
    name: 'State of a component',
    exercises: 14,
  };

  return (
    <div>
      <Header course={course} />
      <Content part1={part1} part2={part2} part3={part3} />
      <Total amount={part1.exercises + part2.exercises + part3.exercises} />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
