import React from 'react';
//import ReactDOM from 'react-dom';

const Header = ({ course }) => {
  console.log({ course });
  return <h1>{course}</h1>;
};

const Content = ({ parts }) => {
  console.log(parts);

  return (
    <div>
      {parts.map((part) => (
        <p key={part.id}>
          {part.name} {part.exercises}
        </p>
      ))}
    </div>
  );
};

const Total = ({ parts }) => {
  console.log('parts', parts);

  /*const exercises = parts.map((item) => item.exercises);
  const total = exercises.reduce((s, p) => {
    console.log('what is happening', s, p);
    return s + p;
  });
 */

  //Const total = reduce (previous, current) => sum,0 initial value
  const total = parts.reduce((pre, current) => pre + current.exercises, 0);
  return <b>Total of {total} exercises</b>;
};

const Course = ({ course }) => {
  console.log(course);
  return (
    <div>
      <Header course={course.name} />
      <Content parts={course.parts} />
      <Total parts={course.parts} />
    </div>
  );
};

export default Course;
