import { useState, useEffect } from "react";

const App = () => {
  const course = [
    {
      name: "Half Stack application development",
      id: 1,
      parts: [
        {
          name: "Fundamentals of React",
          exercises: 10,
          id: 1,
        },
        {
          name: "Using props to pass data",
          exercises: 7,
          id: 2,
        },
        {
          name: "State of a component",
          exercises: 14,
          id: 3,
        },
        {
          name: "Redux",
          exercises: 11,
          id: 4,
        },
      ],
    },
    {
      name: "Node.js",
      id: 2,
      parts: [
        {
          name: "Routing",
          exercises: 3,
          id: 1,
        },
        {
          name: "Middlewares",
          exercises: 7,
          id: 2,
        },
      ],
    },
  ];
  console.log(course);
  return course.map((course) => (
    <div>
      <Header course={course} />
      {course.parts.map((part) => (
        <Course name={part.name} ex={part.exercises} />
      ))}

      <Total total={course.parts} />
    </div>
  ));
};

const Header = ({ course }) => {
  console.log(course.name);
  return <h1>{course.name}</h1>;
};

const Course = ({ ex, name }) => {
  return (
    <>
      <p>{name}</p>
      <h8>{ex}</h8>
    </>
  );
};

const Total = ({ total }) => {
  const totalex = total.reduce((i, total) => {
    return i + total.exercises;
  }, 0);
  return <h4>Total of {totalex} exercises</h4>;
};

export default App;

