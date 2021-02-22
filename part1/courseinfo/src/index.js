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
  console.log(props.parts);
  return (
    <p>
      {props.parts.name} {props.parts.exercises}
    </p>
  );
};
const Content = (props) => {
  console.log(props);
  return (
    <div>
      <Part parts={props.parts[0]} />
      <Part parts={props.parts[1]} />
      <Part parts={props.parts[2]} />
    </div>
  );
};
const Total = (props) => {
  console.log(props);
  return (
    <p>
      Number of exercises{' '}
      {props.parts[0].exercises +
        props.parts[1].exercises +
        props.parts[2].exercises}
    </p>
  );
};
const App = () => {
  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10,
      },
      {
        name: 'Using props to pass data',
        exercises: 7,
      },
      {
        name: 'State of a component',
        exercises: 14,
      },
    ],
  };
  return (
    <div>
      <Header course={course.name} />
      <Content parts={course.parts} />
      <Total parts={course.parts} />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
