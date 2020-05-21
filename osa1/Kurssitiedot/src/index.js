import React from 'react'
import ReactDOM from 'react-dom'

const Content = (props) => {
  return (
    <div>
      <Part nimi={props.parts[0].name} e={props.parts[0].exercises} />
      <Part nimi={props.parts[1].name} e={props.parts[1].exercises}/>
      <Part nimi={props.parts[2].name} e={props.parts[2].exercises}/>
    </div>
  )
}

const Part = (props) => {
  return (
    <div>
      {props.nimi} {props.e}
    </div>
  )
}

const Header = (props) => {
  return (
    <div>
      <h1>{props.nimi}</h1>
    </div>
  )
}

const Total = (props) => {
  return (
    <div>
       <p>Number of exercises {props.exercises1 + props.exercises2 + props.exercises3}</p>
    </div>
  )
}
const App = () => {
  const course = 'Half Stack application development'
  const parts = [
    {
      name: 'Fundamentals of React',
      exercises: 10
    },
    {
      name: 'Using props to pass data',
      exercises: 7
    },
    {
      name: 'State of a component',
      exercises: 14
    }
  ]


  return (
    <div>
      <Header nimi={course} />
      <Part nimi={parts[0].name} e={parts[0].exercises}/>
      <Part nimi={parts[1].name} e={parts[1].exercises}/>
      <Part nimi={parts[2].name} e={parts[2].exercises}/>
      <Total exercises1={parts[0].exercises} exercises2={parts[1].exercises} exercises3={parts[2].exercises}/>
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))