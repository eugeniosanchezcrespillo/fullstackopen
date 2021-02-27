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
  console.log(parts);
  let total = 0;
  parts.map((item) => (total += item.exercises));

  return <b>Total of {total} exercises</b>;
};

const Course = ({ course }) => {
  return (
    <div>
      <Header course={course.name} />
      <Content parts={course.parts} />
      <Total parts={course.parts} />
    </div>
  );
};

export default Course;
